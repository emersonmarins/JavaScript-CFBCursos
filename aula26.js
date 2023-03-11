// Funções de callback 


// Callback hall 
function operacao(...valores) {
    function operacao7(...valores7){
        function operacao6(...valores6) {
            function operacao5(...valores5) {
                function operacao4(...valores4) {
                    function operacao3(...valores3) {
                        function operacao2(...valores2) {
                            function operacao1(...valores1) {
                                let res = 0; 
                                for (let iterator of valores1) {
                                    res += iterator; 
                                }return res
                            }
                            return operacao1(...valores2);
                        }
                        return operacao2(...valores3);
                    }
                    return operacao3(...valores4);    
                }
                return operacao4(...valores5);             
            }
            return operacao5(...valores6); 
        }
        return operacao6(...valores7);  
    }
    return operacao7(...valores);
};


console.log(operacao(10,5,15,55,77));