var nums = []

function baitap1() {
    var num = +document.getElementById('number').value
    nums.push(num)
    
    var tongsoduong = 0
    var demduong = 0
    var demam = 0
    var nhonhat = nums[0]
    var duongnhonhat = 0
    var chancuoi = 0
    var sosanh = ''
    var sntDautien = ''
    
    var xuatmang = nums.slice(0)
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            tongsoduong += nums[i]
            demduong++
            duongnhonhat = nums[i]
        }
        if (nhonhat > nums[i]) {
            nhonhat = nums[i]
        }

    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] < duongnhonhat) {
            duongnhonhat = nums[i]
        }

    }
    //Tim so chan cuoi cung trong mang
    
    
    for(var i = 0; i < xuatmang.length; i++){
        var dem = 0
        if(xuatmang[i]%2 !==0 || xuatmang[i]<0){
            dem++
        }
    }
    if(dem>0){
        chancuoi =-1
    }
    for(var i = 0; i < xuatmang.length; i++){
        if(xuatmang[i]%2===0 && xuatmang[i]>0){
            chancuoi = xuatmang[i]
        }
    }
    //sap xep tang dan
    var increase=xuatmang.sort(compare)

    //Tim so nguyen to dau tien trong mang:
    

    //So sanh so so luong so am va so duong
    for (var i = 0; i < nums.length; i++){
        if(nums[i]<0){
            demam ++
        }
        
    }
    if(demam < demduong){
        sosanh = 'So duong nhieu hon so am'
    }
    if(demam == demduong){
        sosanh = 'So duong bang so am'
    }
    if(demam > demduong){
        sosanh = 'So duong it hon so am'
    }
    
    //Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
    for(var i = 0 ; i< nums.length;i++){
        if(kiemtraSnt(nums[i])==true){
           sntDautien = nums[i]
           break
        }else{
            sntDautien = -1
        }
    }
  
    
    document.getElementById('result').style.display = 'block'
    document.getElementById('result').innerHTML = `
  <p>Cac so co trong mang : ${nums}</p>
  <p>1. Tong cac so duong trong mang : ${tongsoduong}</p>  
  <p>2. Dem cac so duong trong mang : ${demduong} </p>  
  <p>3. Tim so nho nhat trong mang :${nhonhat}</p>  
  <p>4. Tim so duong nho nhat trong mang : ${duongnhonhat}</p>  
  <p>5. Tim so chan cuoi cung trong mang : ${chancuoi}</p>
  <p>7. Sap xep mang theo thu tu tang dan : ${increase}</p>
  <p>8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1 : ${sntDautien}</p>
  <p>10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn : ${sosanh}</p>
`


}




function compare(a,b){
    return a - b
}

function kiemtraSnt(x){
    if(x<2) return false
    for(var j = 2; j <= Math.sqrt(x);j++){
        if(x%j===0){
            return false
        }
    }
    return true
}
function baitap2(){
    var x =+document.getElementById('x').value
    var y =+document.getElementById('y').value

    swap(nums,x,y)
    document.getElementById('result-2').style.display = 'block'
    document.getElementById('result-2').innerHTML = nums
}

function swap(num,x,y){
    var temp = num[x]
    num[x] = num[y]
    num[y] =temp
}













