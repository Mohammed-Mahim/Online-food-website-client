import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="container">
                
                    <h1 className="text-danger text-center my-5 py-5">Our Customers Say</h1>
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                       <div class=" col">
                            <div class="card h-100">
                            <img className="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Jason Roy </h5>
                                <p class="card-text">Dear diet, things just aren’t looking good for the both of us. It’s not me, it’s you. You’re too much work. You’re boring and I can’t stop cheating on you.</p>
                            </div>
                            </div>
                        </div>  
                       <div class="col">
                            <div class="card h-100">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Harry Cane</h5>
                                <p class="card-text">It’s not true that money can’t buy happiness. I mean, have you tried buying ice cream? It’s the same thing!</p>
                            </div>
                            </div>
                        </div>  
                       <div class=" col">
                            <div class="card h-100">
                            <img src="https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Ali Hussain </h5>
                                <p class="card-text">I’m feeling heroic today. I think I might go rescue some alcohol trapped in some kind of bottle later.</p>
                            </div>
                            </div>
                        </div>  
                    </div>                                                              
                 </div>
            </div>
     
    
        
    );
};

export default Review;