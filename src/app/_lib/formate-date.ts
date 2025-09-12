export function formatDate(date: Date | string, locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(locale, options);
}  