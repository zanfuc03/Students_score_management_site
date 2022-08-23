let classlist=['CE2102','TO2101', 'TO2102','LG2101', 'LG2102','CS2101','CS2102','HM2101','HM2102'];
function ReFreshClassList(){
    html="<option>Chọn lớp</option>";
    for(let i = 0 ; i < classlist.length;i++)
    {
        html+="<option value='"+classlist[i]+"'>"+classlist[i]+"</option>";
    }
    $('#slLop').html(html);
}
    ReFreshClassList();
    function LuuDuLieu(){
        if(localStorage){
            localStorage.setItem('dsLop',JSON.stringify(classlist));
        }
    }
    $('button').click(function(e){
        e.preventDefault();
        let tenlop=$('#txtLopMoi').val();
        classlist.push(tenlop);
        ReFreshClassList();
        $('#txtLopMoi').val('');
        LuuDuLieu();
    });
    function LuuDuLieu(){
        if(localStorage){
            localStorage.setItem('dsLop',JSON.stringify(classlist));
        }
    }
    function LoadDuLieu(){
        let dsLop="";
        if(localStorage){
            try{
                dsLop=localStorage.getItem('dsLop');
                if(dsLop)
                {
                    classlist= JSON.parse(dsLop);
                }  
            } catch{
                console.log("Có lỗi hoặc chưa có dữ liệu!");
            }
        }
    }
    $('input[type=submit]').click(function(e){
        e.preventDefault();
        let sinhvien={};
        sinhvien.HoTen = $('#txtHoten').val();
        sinhvien.Mssv = $('#txtMssv').val();
        sinhvien.Ngaysinh = $('#txtyear').val();
        sinhvien.SDT = $('#txtPhone').val();
        sinhvien.Email = $('#txtemail').val();
        sinhvien.Lop = $('#slLop').val();
        danhsachsinhvien.push(sinhvien);
        LuuDuLieu();
        ReFreshDanhSachSinhVien();
    });
    function ReFreshDanhSachSinhVien(){
        $('.sinhvien').remove();
        for(let i = 0 ; i <  danhsachsinhvien.length; i++)
        {
            let html= "<div class=\"row\"><div class=\"col\">"+(i+1)+"</div><div class=\"col-2\">"+danhsachsinhvien[i].HoTen+"</div><div class=\"col\">"+danhsachsinhvien[i].Mssv+"</div><div class=\"col-2\">"+danhsachsinhvien[i].Ngaysinh+"</div><div class=\"col\">"+danhsachsinhvien[i].SDT+"</div><div class=\"col-2\">"+danhsachsinhvien[i].Email+"</div><div class=\"col-1\">"+danhsachsinhvien[i].Lop+"</div>";
            $('#DSSinhVien').append(html);
        }
    }
    LoadDuLieu();
    ReFreshClassList();
