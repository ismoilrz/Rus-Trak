export interface NewsDataType {
    id: number;
    slug: string;
    title: string;
    date: string;
    desc: string[];
    pick: string[];
    parametrs?: string[];
}