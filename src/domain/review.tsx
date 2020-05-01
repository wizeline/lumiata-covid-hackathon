export interface Name {
    first: string;
    last: string;
}

export interface Review {
    avatar: string;
    content: string;
    username: string;
    name: Name;
    date: number;
    userType: string;
    rating: number;
}
