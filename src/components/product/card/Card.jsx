import React, { Component } from 'react';
import './card.scss'
class Card extends Component {
  render() {  
      
    
    let {productsList,deleteItem,update} = this.props;
    

     
        
        return <>
        
        
    <div className="card py-4 border-0 rounded-0 border-bottom mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={productsList.thumbnail}
          className="d-block img-fluid h-xs rounded  w-100 h-img"
         alt="..." />
        </div>
        <div className="col-md-8 d-flex">
          <div className="card-body gap-3 row  ps-0 ps-md-3 d-sm-flex">
            <div className="row col-12 col-sm-8">
              <div className="col-10">
                <h5 className="card-title mb-0 titleColor fw-bold fs-5">
                    {productsList.title} 
                    </h5>
                <p className="card-text mb-4"><small className=" text-body-tertiary">
                    {productsList.brand} / {productsList.category}
                    </small></p>
              </div>
              <div className="col-10">
                <p className="card-text text-body-secondary m-0">
                    {productsList.description}
                    </p>
                <p className="card-text"><small className="text-body-stock">
                    {productsList.stock}
                     <strong> in stock</strong></small></p>
              </div>
            </div>
            <div className="row col-sm-4 col-12 ">
              <div className="col-12 gap-3 d-flex justify-content-sm-center mb-sm-4 order-2 order-sm-0">
                {/* first button delet */}
                <div>
                <button type="button" className="rounded newStyle shadow-none border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i className="fa-solid fa-trash"></i> 
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{productsList.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body  bg-delete">
                      Do you want to Delete this real product
                        <strong></strong>
                      </div>
                      <div className="modal-footer">
                      <button onClick={() => deleteItem(productsList.id) } data-bs-dismiss="modal" className="rounded bg-delete p-2 shadow-none border-0"  >
                          <b>Delet</b>
                      </button> 
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                {/* first button delet */}

                {/* 
                <button onClick={() => deleteItem(productsList.id) }  className="rounded newStyle shadow-none border-0"  >
                <i className="fa-solid fa-trash"></i> 
                </button> 
                */}
                <button onClick={()=> update(productsList )} disabled={(productsList.stock === 0 )? "disabled"  : ""} 
                className={`rounded newStyle2 shadow-none border-0 position-relative  `} >
                <i class="fa-solid fa-cart-plus"></i>
                <div className={` ${productsList.cartCount > 0 ? "d-flex" : "d-none"}`}>
                  <span class="count d-flex justify-content-center align-items-center 
                  position-absolute top-0 start-100 translate-middle badge border border-4 border-white rounded-circle bg-danger p-2">
                    <span >{productsList.cartCount}</span></span>
                </div>
                </button>
              </div>
              <div className="col-12 border-sm-start border-start border-sm-none mb-5 mb-sm-0 text-start text-sm-center order-1 fs-xs">
                <p className="card-text m-0  "><small className="text-dic">
                    {Math.round(productsList.discountPercentage) + '% OFF'}
                     </small></p>
                <p className="card-text fs-6 "><small className="text-dic"><strong>
                    {productsList.price+` $`}
                    </strong></small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

        
        
        </>;
    }
}

export default Card;