// Problem: https://leetcode.com/problems/reverse-string

// O(n) solution
export const reverseString = (s) => {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }

    return s;
};
