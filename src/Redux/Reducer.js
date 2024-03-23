import { createAction,createReducer } from "@reduxjs/toolkit";
const AddtoCart=createAction('AddtoCart')
const Calculate=createAction('Calculate')
const decrement=createAction('decrement')
const deleteItem=createAction('deleteItem')
export  const cartreducer=createReducer({
    CartItem:[],
    Subtotal:0,
    Tax:0,
    TotalAmount:0,
    Shipping:0,
},
(builder)=>{
    builder.addCase(AddtoCart,(state,action)=>{
        const Items=action.payload;
        const itemExist = state.CartItem.find((i) => i.Id === Items.Id);
        if (itemExist) {
          state.CartItem.forEach((i) => {
            if (i.Id === Items.Id) {
              i.Qty += 1;
            }
          });
        } else {
          state.CartItem.push(Items);
        }
    })
    builder.addCase(Calculate,(state, action)=>{
        let sum=0;
        state.CartItem.forEach((i)=>{return(sum+=i.Qty*i.Price)})
        state.Subtotal=sum;
        if(state.CartItem.length>0)
        {
            state.Subtotal>=150?state.Shipping=15:state.Shipping=30;
        }
        else{
            state.Subtotal=0;
            state.Shipping=0;
        }
        state.Tax=+(state.Subtotal*0.18).toFixed();
        state.TotalAmount=state.Subtotal+state.Shipping+state.Tax;
    })
    builder.addCase(decrement,(state,action)=>{
      let Item=action.payload;
      state.CartItem.forEach((i)=>{
        if(i.Id==Item.Id && i.Qty>=1)
        {
          i.Qty-=1;
        }
        if(i.Qty==0)
        {
          state.CartItem=state.CartItem.filter((i)=>Item.Id !== i.Id)
        }
      })
    })
    builder.addCase(deleteItem,(state,action)=>{
      const Item=action.payload;
      state.CartItem=state.CartItem.filter((i)=>Item.Id !== i.Id)
    })
}) 