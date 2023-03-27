import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = (props) => { // khai báo component ProductAdd và nhận props chứa data là onAdd
    const [valueInput, setValueInput] = useState({ // khai báo state valueInput và setValueInput
        name: "",
        price: 0
    });
    const navigate = useNavigate(); // khai báo navigate để chuyển hướng
    const onHandleChange = (e) => { // khai báo hàm onHandleChange để lấy giá trị của input khi thay đổi
        const name = e.target.name; // lấy name của input
        const value = e.target.value; // lấy value của input
        setValueInput({ ...valueInput, [name]: value }) // gán giá trị của input vào state valueInput
    }
    const onHandleSubmit = (e) => { // khai báo hàm onHandleSubmit để xử lý khi submit form
        e.preventDefault();
        props.onAdd(valueInput) // gọi hàm onAdd truyền vào giá trị là valueInput
        // onAdd({
        //     name: value
        // });
        navigate('/admin/products') // chuyển hướng đến trang /admin/products
    }
    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" name="name" placeholder="Ten san pham" onChange={onHandleChange} />
            <input type="number" name="price" placeholder="Gia san pham" onChange={onHandleChange} />
            <button>Submit</button>
        </form>
    )
}

export default ProductAdd