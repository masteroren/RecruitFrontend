export interface Response {
    items: Book[];
}

export interface Book {
    inWishList: boolean;
    id; number;
    volumeInfo: {
        title: string;
        authors: string[];
        imageLinks: {
            thumbnail: string;
        };
        publisher: string;
        description: string;
    }
}