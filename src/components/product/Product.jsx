import React, { Component } from 'react';
import './product.scss';
import { Link } from 'react-router-dom';
import Card from './card/Card';
import axios from 'axios';




class Product extends Component {



    async getProduct(){
        let response = await axios.get('https://dummyjson.com/products')
        let productsList = response.data.products;


        for(let element of productsList ){

          element['cartCount'] = 0;
          
        }
        
        let copyProductList = [...productsList];
        this.setState({productsList});
        this.setState({copyProductList});
    }


    
    serachKey = val => {
      let newArryList = this.state.copyProductList.filter((element) =>
      element.title
      .toLowerCase()
      .includes(val.toLowerCase().trim())
      );
      this.setState({productsList: newArryList})
      
    }

    updateStock = (prod , x)=>{
      let myIndex = this.state.productsList.indexOf(prod);
      let productsList = [...this.state.productsList]
      productsList[myIndex].stock--
      productsList[myIndex].cartCount++
      this.setState({productsList})
    }
    
    deleteItem = id => {
      let productsList = this.state.copyProductList.filter((item, index) => item.id !== id)
        this.setState({productsList}) 
        this.setState({copyProductList: productsList}) 
    }


state = {
    productsList: [],
    copyProductList: []
}

componentDidMount(){
   this.getProduct()
}

    render() {
        return <>
    <div className="container text-center my-3">
      <div className="row m-2 m-sm-0">
        <div className="col-12 col-sm p-0 d-flex  align-items-center ">
          <h1 className="m-0 textColor letter-spacing text-lg-start">Products</h1>
        </div>
        <div className="col-12 col-sm-6 my-3 my-sm-2 my-md-0 w-s d-flex p-0"> 
        <input id='Username' type="search" 
        onChange={(e) => this.serachKey(e.target.value) }
        className="form-control  w-xxl" placeholder="Search ..." />
        </div>
        <div className="mt-3 mt-xl-0 parent col-xl-4 p-0 p-md-1 col-12 gap-3 d-flex justify-content-between justify-content-xl-center align-items-center">
          <button  type="button" className="btn btn-light px-4 shadow-sm fs-new">Welcome, Rebbecca</button>
          <div title="LogOut" >
            <button className="rounded btn btn-secondary p-0 shadow-none " >
                <Link className='text-white p-2 link-underline link-underline-opacity-0 d-flex' to="/Login">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </button>
          </div>
        </div>

      </div>
    </div>


  <div className="container shadow bg-white py-4 px-5 lastborder">  

        {this.state.productsList.map((product)=>{return <Card productsList={product} 
        deleteItem={this.deleteItem}
        key={product.id}  
        update={this.updateStock}
        />})}
        
</div>

        
        
        
        </>;
    }
}

export default Product;