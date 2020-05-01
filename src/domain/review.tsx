export interface Name {
    first: string;
    last: string;
}

export interface Review {
    avatar: string;
    content: string;
    username: string;
    name: Name;
    date: string;
    userType: string;
    rating: number;
}
