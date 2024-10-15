import { type IRepository } from './IRepository.ts';

export class BaseRepository<T> implements IRepository<T> {
    private db = new Set<T>();

    create(item: T): void {
        this.db.add(item);
    }

    *read(): IterableIterator<T> {
        for (const item of this.db.values()) {
            yield item;
        }
    }

    update(id: number, item: T): void {
        for (const record of this.db.values()) {
            if ((record as any).id === id) {
                this.db.delete(record);
                this.db.add(item);
                break;
            }
        }
    }

    delete(id: number): void {
        for (const record of this.db.values()) {
            if ((record as any).id === id) {
                this.db.delete(record);
                break;
            }
        }
    }
}
