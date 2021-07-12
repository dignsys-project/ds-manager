using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Saturn.Backends.Commons
{
    public class PaginatedList<T> : List<T>
    {
        public int PageIndex { get; private set; }
        public int PagesCount { get; private set; }

        public int ItemsCount { get; private set; }

        protected PaginatedList(List<T> items, int itemsCount, int from, int size)
        {
            ItemsCount = itemsCount;
            PageIndex = from;
            PagesCount = (int)System.Math.Ceiling(itemsCount / (double)size);

            this.AddRange(items);
        }

        public bool HasPreviousPage { get => PageIndex > 1; }
        public bool HasNextPage { get => PageIndex < PagesCount; }

        public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, int from, int size)
        {
            var count = await source.CountAsync();
            var items = await source.Skip(from * size).Take(size).ToListAsync();
            return new PaginatedList<T>(items, count, from, size);
        }
    }

    public static class PaginatedListExtension
    {
        public static Protocols.Common.Paginator ToMessage<T>(this PaginatedList<T> list)
        {
            var message = new Protocols.Common.Paginator();
            message.ItemsCount = list.ItemsCount;
            message.PagesCount = list.PagesCount;
            message.PagesIndex = list.PageIndex;

            return message;
        }
    }
}