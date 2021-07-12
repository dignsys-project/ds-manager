using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Prometheus.Databases.Repositories.Commons
{
    public abstract class AbstractRepository<T> : IRepository<T> where T : Models.Databases.DatabaseId
    {
        public abstract DbSet<T> Table { get; }

        protected abstract string RepositoryName { get; }

        protected readonly DatabaseDbContext m_Context = null;

        protected readonly ILogger m_Logger = null;


        public AbstractRepository(ILogger logger, DatabaseDbContext context)
        {
            m_Logger = logger;
            m_Context = context;
        }

        public IExecutionStrategy GetExecution()
        {
            return m_Context.CreateExecutionStrategy();
        }

        public async Task<bool> Delete(T record)
        {
            var ee = Table.Remove(record);
            bool bSuccess = ee.State == EntityState.Deleted;
            if (bSuccess)
            {
                try
                {
                    await m_Context.SaveChangesAsync();

                    m_Logger.LogInformation($"Delete {RepositoryName}, Database Id : {ee.Entity.Id}");

                    return true;
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"Delete {RepositoryName}, Exception : {e}");

                    return false;
                }
            }

            m_Logger.LogCritical($"Delete {RepositoryName}, State Not Matched, {ee.State}, Database Id : {ee.Entity.Id}");

            return false;
        }

        public virtual async Task<bool> DeleteById(long id)
        {
            var record = await Select(id);

            return await Delete(record);
        }

        public async Task<long> GetCount()
        {
            return await Table.LongCountAsync();
        }

        public async Task<List<T>> Items()
        {
            return await Table.ToListAsync();
        }

        public virtual async Task<T> Select(long id)
        {
            return await Table.FindAsync(id);
        }

        public async Task<bool> Update(T record)
        {
            var ee = await Task.Run(() => Table.Update(record));
            bool bSuccess = ee.State == EntityState.Modified;
            if (bSuccess)
            {
                try
                {
                    var value = await m_Context.SaveChangesAsync();

                    m_Logger.LogInformation($"Update {RepositoryName}, DatabaseId : {record.Id}");

                    return true;
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"Update {RepositoryName}, Exception : {e}");

                    return false;
                }
            }

            m_Logger.LogCritical($"Update {RepositoryName}, Status Not Matched., {ee.State}, DatabaseId : {record.Id}");

            return false;
        }

        public async Task<T> Insert(T record)
        {
            var ie = await Table.AddAsync(record);

            bool bSuccess = ie.State == EntityState.Added;
            if (bSuccess)
            {
                try
                {
                    var value = await m_Context.SaveChangesAsync();

                    m_Logger.LogInformation($"Insert {RepositoryName}, DatabaseId : {record.Id}");

                    return ie.Entity;
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"Insert {RepositoryName}, Exception : {e}");

                    return null;
                }

            }

            m_Logger.LogCritical($"Insert {RepositoryName}, Status Not Matched., {ie.State}, DatabaseId : {record.Id}");

            return null;
        }

        public async Task<IDbContextTransaction> BeginTransaction()
        {
            return await m_Context.Database.BeginTransactionAsync();
        }
    }
}