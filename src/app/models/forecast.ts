export interface Forecast {
    location: Location;
    timelines: Timelines;
}

export interface Location {
    lat: number;
    lon: number;
    name: string;
    type: string;
}

export interface Timelines {
    minutely: TimelineValues[];
    hourly: TimelineValues[];
    daily: TimelineValues[];
}

export interface TimelineValues {
    time: string;
    values: Record<string, string>;
}
