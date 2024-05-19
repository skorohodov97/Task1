function merge(nums1, m, nums2, n) {
    let index1 = m - 1; // Индекс последнего элемента в nums1
    let index2 = n - 1; // Индекс последнего элемента в nums2
    let indexMerged = m + n - 1; // Индекс, с которого начнем добавлять объединенные элементы
    
    
    while (index2 >= 0) {
       
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[indexMerged] = nums1[index1];
            index1--;
        } else {
            nums1[indexMerged] = nums2[index2];
            index2--;
        }
       
        indexMerged--;
    }
}

// Пример использования
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); 
