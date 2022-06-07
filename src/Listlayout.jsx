import React from 'react';

export default props => (


       props.showEditTorF == true // does this element have a true value for showEdit?
             // for that element display a form //yes then display description form with textare with descrip
            // and proroity select and save button
            // <div className={ props.priority } width='100%' ></div>
             ? <div className='list-group'>
               <div width='100%' className={ props.priority } >
                 <label htmlFor='updateTodo'><b>Description</b></label>
                 <textarea className='update-todo-text' name='inputTodo' defaultValue={ props.description } onChange={ props.handleUpdateChangefx } />
                 <label htmlFor='updatePriority'><b>Priority</b></label>
                 <select className='update-todo-priority ' name='selectPriority' defaultValue={ props.priority } onChange={ props.handleUpdateChangefx } >
                   <option value='none' selected disabled hidden>Select an Priority</option>
                   <option value='list-group-item list-group-item-success'>Low Priority</option>
                   <option value='list-group-item list-group-item-warning'>Medium Priority</option>
                   <option value='list-group-item list-group-item-danger'>High Priority</option>
                 </select><br /><br />
                 <button type='button' onClick={ ()=> props.clickSaveEditItemfx(props.index) } >Save</button>
               </div>
             </div>
            // 'list as regular style'
             : <div className='list-group'>
               <div className={ props.priority } width='100%' >
                 <div className='form-check'>
                   <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' onChange={ () => props.handleChangeCrossOfffx(props.index) } />
                   <label className='form-check-label' htmlFor='flexCheckDefault'>
                     <span className={ props.crossOff? 'strike-through' : 'regular' }>{ props.description }</span>
                   </label>
                 </div>
                 <a className='edit-todo' onClick={ () => props.showEditFormfx(props.index) } id={ props.description }>
                   <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-pencil-square' viewBox='0 0 16 16'>
                     <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                     <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
                   </svg>
                 </a>
                 <a className='delete-todo' onClick={ () => props.deleteItemfx(props.index) } id={ props.description }>
                   <svg id={ props.description } xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash' viewBox='0 0 16 16'>
                     <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                     <path fillRule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' />
                   </svg>
                 </a>

               </div>

             </div>


);
