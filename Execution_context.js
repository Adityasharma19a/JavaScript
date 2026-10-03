// ******************************************************* Execution Context ********************************************************
// when file is made 
// {} global exicution context is created 
// and then refred by "this" varible
// execution context is diffrent for all 
// important - browser has this is pointing to window object
// js is single threaded
// type -> global ec, function ec, eval ec

//{} then two phase 1. memory creation phase then 2. execution phase

// ******************************************************* How js code execute ********************************************************

// 1. global execution pahse -> this keword
// 2. memory creation phase -> variable which are intially have value undefined and in function intially goes defination of it
// 3. execution phase -> firstly the value will be provide to variable but 
// if we have function then one more execution context is made conatining varible enviroment+exection thread
// and when the exection phase is done then it also get delete

// ******************************************************* Call Stack********************************************************

//intially it contain global execution 
// then the call of the funtion comes