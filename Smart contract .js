pragma solidity >=0.4.0 <0.6.0;
 

 contract EmployeeAssessment  {
          uint  i; 
      
       struct Employee {
       bytes32  Employeename;
        uint  Employeeage;
       bytes32 Employeerole;
       bytes32 Department 
       uint Employeecount;
      uint Employeeyearsofwork;
        
       address payable Employeeaddress;
       
    
      mapping (address => Employee[1000]) employees;
     
       }
       
        Employee[] public Employeestore; 
        Employee theemployee;
       
       
   
     function FillEmployeeDetail(address payable _Employeeaddress, bytes32  _Employeename, uint  _Employeeage,  bytes32 _Employeerole,  uint _Employeeyearsofwork, bytes32 _Department ) public returns(address payable retrievedaddress,  bytes32 retrievedname, uint retrievedage,bytes32 retrievedrole, uint retrievedyearsofwork,bytes32 retrievedDepartment  )   {
         i=0;
       theemployee.Employeecount=0;
       i= theemployee.Employeecount;
        uint Employeeage = 0;
         Employeeage =0;
        uint Employeeyearsofwork =0;
          Employeeyearsofwork =0;
    
     theemployee.Employeeaddress;
        
            
         _Employeeaddress =   theemployee.employees[_Employeeaddress][i].Employeeaddress  ;
             
                   require(  theemployee.employees[_Employeeaddress][i].Employeeaddress == _Employeeaddress);
             _Employeename=   theemployee.employees[_Employeeaddress][i]._Employeename;
     _Employeeage =   theemployee.employees[_Employeeaddress][i]._Employeeage;
          _Employeerole=   theemployee.employees[_Employeeaddress][i]._Employeerole;
           _Employeeyearsofwork=   theemployee.employees[_Employeeaddress][i]._Employeeyearsofwork;
             _Employeename=   theemployee.employees[_Employeeaddress][i]._Employeename;
           _Department =   theemployee.employees[_Employeeaddress][i]._Department ;

retrievedaddress  =  _Employeeaddress;  
 retrievedname =  _Employeename; 
 retrievedage =      _Employeeage; 
  retrievedrole  =           _Employeerole;
 retrievedyearsofwork =_Employeeyearsofwork;
 retrievedDepartment =_Department; 

            
         return (  retrievedaddress  , retrievedname , retrievedage , retrievedrole , retrievedyearsofwork,
 retrievedDepartment 
           );
}         
     function FillAssessmentForm (address payable _Employeeaddress, bytes32  _Employeename, uint _numberofabsenteism, bool _callIn, uint _numberoflateness, bool _late,   bool _insurbordination, bytes32 _task, bytes32 _taskdeadline, bytes32 _annyalachievedgoal, bool _achievedtask, bool _achievedannualgoal,  bytes32 _failures, bytes32 _remarks ) public {
         i=0;
       theemployee.Employeecount=0;
       i= theemployee.Employeecount;
       
theemployee.Employeeaddress;
        
            
         _Employeeaddress =   theemployee.employees[_Employeeaddress][i].Employeeaddress  ;
             
                   require(  theemployee.employees[_Employeeaddress][i].Employeeaddress == _Employeeaddress);

           PrintAssessmentForm(_Employeeaddress,   _Employeename,  _numberofabsenteism,  _callIn,  _numberoflateness, _late,   _insurbordination,  _task,  _taskdeadline,  _annyalachievedgoal,  _achievedtask,  _achievedannualgoal,   _failures, _remarks );
                  
}       
         
 

         
     }
     
 
            function PrintAssessmentReport(address payable _Employeeaddress, bytes32  _Employeename, uint _numberofabsenteism, bool _callIn, uint _numberoflateness, bool _late,   bool _insurbordination, bytes32 _task, bytes32 _taskdeadline, bytes32 _annualachievedgoal, bool _achievedtask, bool _achievedannualgoal,  bytes32 _failures, bytes32 _remarks )  public returns (bytes32 latereason, bytes32 absencereports, bytes32 insurbordinate, bytes32 taskdeadlinefail, bytes32 goaldeadlinefail  ) {
         i=0;
       theemployee.Employeecount=0;
       i= theemployee.Employeecount;
        
    theemployee.Employeeaddress;
        
            
         _Employeeaddress =   theemployee.employees[_Employeeaddress][i].Employeeaddress  ;
             
                   require(  theemployee.employees[_Employeeaddress][i].Employeeaddress == _Employeeaddress);
         
                             if(_numberofabsenteism >3){
                    absencereports = " Poor attendance to work!"; 
 
}                                    

                        if(_callIn == false){
             absencereports= "Poor attendance and failure to report";                
}
                          if( _numberoflateness > 5 && late== true){
              latereason = "Extreme lateness to work!" ;                   
 }
               if(_achievedtask == false){
              taskdeadlinefail= "Inability to reach task deadlines!" ;                   
 }
              if(_insurbordination == true){
              insurbordinate= "Extreme insurbordination to authorities!" ;                   
 }

              if( _achievedannualgoal  == true){
              goaldeadlinefail= "Inability to fulfuill annual deadlines!" ;                   
 }


            
         return ( latereason,  absencereports,  insurbordinate,  taskdeadlinefail,  goaldeadlinefail 
           );
}         

       

}

ALGORITHM II (Pseudocode for Employee Assessment)
This assesses the performance of Employee based on Input Provided by Employee
REQUIRE: INPUT Employee's Address ( _Employeeaddress)  Employee's Name( _Employeename), Number of Absenteeism ( _numberofabsenteism), If Employee Called-In( _callIn),Number of Lateness( _numberoflateness), If Employee was late( _late), If Employee was Insurbordinate( _insurbordination), Task Specified( _task), Task Deadline( _taskdeadline), Goals( _annualachievedgoal), If task was achieved( _achievedtask), If annual goal was achieved( _achievedannualgoal), Failures specified ( _failures), Remarks( _remarks) 

Ensure: Employee's Assessment As EmpAssessment
Specify Inputs As  _Employeeaddress , _Employeename,  _numberofabsenteism,  _callIn, _numberoflateness,  _late,  _insurbordination,  _task,  _taskdeadline, _annualachievedgoal,  _achievedtask,  _achievedannualgoal,  _failures,  _remarks  
Specify Report of Absence As  absencereports
Specify Report of Late As  latereason
Specify Report of Insurbordination As  insurbordinate
 Specify Report of Reaching Task Deadline As taskdeadlinefail
Specify Report of Reaching Goal Deadline As    goaldeadlinefail
 Output absencereports
Output  latereason
Output  insurbordinate
Output taskdeadlinefail
Output goaldeadlinefail 
Output absencereports ,latereason ,insurbordinate, taskdeadlinefail, goaldeadlinefail As EmpAssessment 

 