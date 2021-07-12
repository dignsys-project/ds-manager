using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace Prometheus.Databases.Repositories.Commons
{
    public interface IRepository<T> where T : Models.Databases.DatabaseId
    {
        DbSet<T> Table { get; }

        Task<long> GetCount();

        Task<List<T>> Items();

        Task<T> Select(long id);

        Task<bool> Update(T record);

        Task<T> Insert(T record);

        Task<bool> Delete(T record);
        Task<bool> DeleteById(long id);

        IExecutionStrategy GetExecution();

        Task<IDbContextTransaction> BeginTransaction();
    }
}