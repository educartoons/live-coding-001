export type Interval = [number, number];

export class Intervals {
  intervals: Interval[];
  constructor(intervals: Interval[]) {
    this.intervals = intervals;
  }
  private sort(intervals: Interval[]): Interval[] {
    return intervals.sort((a, b) => a[0] - b[0]);
  }
  public mergeOverlapped(): Interval[] {
    const intervals = this.sort(this.intervals);
    let mergedIntervals: Interval[] = [];
    let start = intervals[0][0];
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (end >= intervals[i][0]) {
        end = Math.max(end, intervals[i][1]);
      } else {
        mergedIntervals.push([start, end]);
        start = intervals[i][0];
        end = intervals[i][1];
      }
    }
    mergedIntervals.push([start, end]);
    return mergedIntervals;
  }
}