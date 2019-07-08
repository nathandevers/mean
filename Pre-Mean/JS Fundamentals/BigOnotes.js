// Big O notation is a way to measure how well a

// computer algorithm scales as the amount of data
003
// involved increases. It is not always a measure
004
// of speed as you'll see below
005
 
006
// This is a rough overview of Big O and doesn't
007
// cover topics such as asymptotic analysis, which
008
// covers comparing algorithms as data approaches
009
// infinity
010
 
011
// What we are defining is the part of the algorithm
012
// that has the greatest effect. For example
013
// 45n^3 + 20n^2 + 19 = 84 (n=1)
014
// 45n^3 + 20n^2 + 19 = 459 (n=2) Does 19 matter?
015
// 45n^3 + 20n^2 + 19 = 47019 (n=10)
016
// Does the 20n^2 matter if 45n^3 = 45,000?
017
// Has an O(n^3) Order of n-cubed
018
 
019
public class BigONotation {
020
 
021
    private int[] theArray;
022
 
023
    private int arraySize;
024
 
025
    private int itemsInArray = 0;
026
 
027
    static long startTime;
028
 
029
    static long endTime;
030
 
031
    public static void main(String[] args) {
032
 
033
        /*
034
         * 0(1) Test BigONotation testAlgo = new BigONotation(10);
035
         *
036
         * testAlgo.addItemToArray(10);
037
         *
038
         * System.out.println(Arrays.toString(testAlgo.theArray));
039
         */
040
 
041
        BigONotation testAlgo2 = new BigONotation(100000);
042
        testAlgo2.generateRandomArray();
043
 
044
        BigONotation testAlgo3 = new BigONotation(200000);
045
        testAlgo3.generateRandomArray();
046
 
047
        BigONotation testAlgo4 = new BigONotation(30000);
048
        testAlgo4.generateRandomArray();
049
 
050
        BigONotation testAlgo5 = new BigONotation(400000);
051
        testAlgo5.generateRandomArray();
052
 
053
        /*
054
         * O(N) Test
055
         *
056
         * testAlgo2.linearSearchForValue(20);
057
         *
058
         * testAlgo3.linearSearchForValue(20);
059
         *
060
         * testAlgo4.linearSearchForValue(20);
061
         *
062
         * testAlgo5.linearSearchForValue(20);
063
         */
064
 
065
        // O(N^2) Test
066
        /*
067
         * testAlgo2.bubbleSort();
068
         *
069
         * testAlgo3.bubbleSort();
070
         *
071
         * testAlgo4.bubbleSort();
072
         *
073
         * // 0 (log N) Test
074
         *
075
         * testAlgo2.binarySearchForValue(20);
076
         * testAlgo3.binarySearchForValue(20);
077
         */
078
 
079
        // O (n log n) Test
080
 
081
        startTime = System.currentTimeMillis();
082
 
083
        testAlgo2.quickSort(0, testAlgo2.itemsInArray);
084
 
085
        endTime = System.currentTimeMillis();
086
 
087
        System.out.println("Quick Sort Took " + (endTime - startTime));
088
 
089
    }
090
 
091
    // O(1) An algorithm that executes in the same
092
    // time regardless of the amount of data
093
    // This code executes in the same amount of
094
    // time no matter how big the array is
095
 
096
    public void addItemToArray(int newItem) {
097
 
098
        theArray[itemsInArray++] = newItem;
099
 
100
    }
101
 
102
    // 0(N) An algorithm thats time to complete will
103
    // grow in direct proportion to the amount of data
104
    // The linear search is an example of this
105
 
106
    // To find all values that match what we
107
    // are searching for we will have to look in
108
    // exactly each item in the array
109
 
110
    // If we just wanted to find one match the Big O
111
    // is the same because it describes the worst
112
    // case scenario in which the whole array must
113
    // be searched
114
 
115
    public void linearSearchForValue(int value) {
116
 
117
        boolean valueInArray = false;
118
        String indexsWithValue = "";
119
 
120
        startTime = System.currentTimeMillis();
121
 
122
        for (int i = 0; i < arraySize; i++) {
123
 
124
            if (theArray[i] == value) {
125
                valueInArray = true;
126
                indexsWithValue += i + " ";
127
            }
128
 
129
        }
130
 
131
        System.out.println("Value Found: " + valueInArray);
132
 
133
        endTime = System.currentTimeMillis();
134
 
135
        System.out.println("Linear Search Took " + (endTime - startTime));
136
 
137
    }
138
 
139
    // O(N^2) Time to complete will be proportional to
140
    // the square of the amount of data (Bubble Sort)
141
    // Algorithms with more nested iterations will result
142
    // in O(N^3), O(N^4), etc. performance
143
 
144
    // Each pass through the outer loop (0)N requires us
145
    // to go through the entire list again so N multiplies
146
    // against itself or it is squared
147
 
148
    public void bubbleSort() {
149
 
150
        startTime = System.currentTimeMillis();
151
 
152
        for (int i = arraySize - 1; i > 1; i--) {
153
 
154
            for (int j = 0; j < i; j++) {
155
 
156
                if (theArray[j] > theArray[j + 1]) {
157
 
158
                    swapValues(j, j + 1);
159
 
160
                }
161
            }
162
        }
163
 
164
        endTime = System.currentTimeMillis();
165
 
166
        System.out.println("Bubble Sort Took " + (endTime - startTime));
167
    }
168
 
169
    // O (log N) Occurs when the data being used is decreased
170
    // by roughly 50% each time through the algorithm. The
171
    // Binary search is a perfect example of this.
172
 
173
    // Pretty fast because the log N increases at a dramatically
174
    // slower rate as N increases
175
 
176
    // O (log N) algorithms are very efficient because increasing
177
    // the amount of data has little effect at some point early
178
    // on because the amount of data is halved on each run through
179
 
180
    public void binarySearchForValue(int value) {
181
 
182
        startTime = System.currentTimeMillis();
183
 
184
        int lowIndex = 0;
185
        int highIndex = arraySize - 1;
186
 
187
        int timesThrough = 0;
188
 
189
        while (lowIndex <= highIndex) {
190
 
191
            int middleIndex = (highIndex + lowIndex) / 2;
192
 
193
            if (theArray[middleIndex] < value)
194
                lowIndex = middleIndex + 1;
195
 
196
            else if (theArray[middleIndex] > value)
197
                highIndex = middleIndex - 1;
198
 
199
            else {
200
 
201
                System.out.println("\nFound a Match for " + value
202
                        + " at Index " + middleIndex);
203
 
204
                lowIndex = highIndex + 1;
205
 
206
            }
207
 
208
            timesThrough++;
209
 
210
        }
211
 
212
        // This doesn't really show anything because
213
        // the algorithm is so fast
214
 
215
        endTime = System.currentTimeMillis();
216
 
217
        System.out.println("Binary Search Took " + (endTime - startTime));
218
 
219
        System.out.println("Times Through: " + timesThrough);
220
 
221
    }
222
 
223
    // O (n log n) Most sorts are at least O(N) because
224
    // every element must be looked at, at least once.
225
    // The bubble sort is O(N^2)
226
    // To figure out the number of comparisons we need
227
    // to make with the Quick Sort we first know that
228
    // it is comparing and moving values very
229
    // efficiently without shifting. That means values
230
    // are compared only once. So each comparison will
231
    // reduce the possible final sorted lists in half.
232
    // Comparisons = log n! (Factorial of n)
233
    // Comparisons = log n + log(n-1) + .... + log(1)
234
    // This evaluates to n log n
235
 
236
    public void quickSort(int left, int right) {
237
 
238
        if (right - left <= 0)
239
            return;
240
 
241
        else {
242
 
243
            int pivot = theArray[right];
244
 
245
            int pivotLocation = partitionArray(left, right, pivot);
246
 
247
            quickSort(left, pivotLocation - 1);
248
            quickSort(pivotLocation + 1, right);
249
 
250
        }
251
 
252
    }
253
 
254
    public int partitionArray(int left, int right, int pivot) {
255
 
256
        int leftPointer = left - 1;
257
        int rightPointer = right;
258
 
259
        while (true) {
260
 
261
            while (theArray[++leftPointer] < pivot)
262
                ;
263
 
264
            while (rightPointer > 0 && theArray[--rightPointer] > pivot)
265
                ;
266
 
267
            if (leftPointer >= rightPointer) {
268
 
269
                break;
270
 
271
            } else {
272
 
273
                swapValues(leftPointer, rightPointer);
274
 
275
            }
276
 
277
        }
278
 
279
        swapValues(leftPointer, right);
280
 
281
        return leftPointer;
282
 
283
    }
284
 
285
    BigONotation(int size) {
286
 
287
        arraySize = size;
288
 
289
        theArray = new int[size];
290
 
291
    }
292
 
293
    public void generateRandomArray() {
294
 
295
        for (int i = 0; i < arraySize; i++) {
296
 
297
            theArray[i] = (int) (Math.random() * 1000) + 10;
298
 
299
        }
300
 
301
        itemsInArray = arraySize - 1;
302
 
303
    }
304
 
305
    public void swapValues(int indexOne, int indexTwo) {
306
 
307
        int temp = theArray[indexOne];
308
        theArray[indexOne] = theArray[indexTwo];
309
        theArray[indexTwo] = temp;
310
 
311
    }
312
 
313
}
