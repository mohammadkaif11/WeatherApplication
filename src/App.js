import React from "react";
import { useEffect, useState } from "react";
import { MDBBtn, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import UserTemplate from "./Component/UserTemplate";
import Card from "./Component/Card";
import { MDBNavbar, MDBNavbarBrand, MDBInputGroup } from "mdb-react-ui-kit";
import './index.css'
function App() {
  const [Mohalikey, setMohalikey] = useState("3136633");
  const [validCity, setValidCity] = useState(false)
  const apiKey = "bEabmOMsttdTHPtaQ9KcZm2xihs9tnLI";
  const [CardsObj, setCardObj] = useState([]);
  const [City, setCity] = useState("");
  
    
  const SubmitData = (event) => {
    let CityName="";
    event.preventDefault();
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${City}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data!=null && data.length!=0 && data!=[]){
          CityName=data[0].LocalizedName;
          fetch(`http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
               data[0].city=CityName;
               const d = new Date(data.LocalObservationDateTime);
               console.log(d);
             console.log("data is ",data[0])
            setCardObj([...CardsObj,data[0]]);
          });
        }else{
          setValidCity(true);
          setTimeout(() => {
            setValidCity(false);
          }, 5000);
        }
      });
      setCity("")
   };


  return (
    <>
      <MDBNavbar style={{backgroundColor:"#cb9797",color:"white"}} className="p-2">
          <MDBNavbarBrand style={{color:"white"}}>WeatherApp</MDBNavbarBrand>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Search City"
              aria-label="Search"
              type="Search"
              value={City}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <MDBBtn  color='info' className="mx-2" onClick={SubmitData}>
              Search
            </MDBBtn>
          </MDBInputGroup>
          

      </MDBNavbar>
      <UserTemplate />
      <MDBRow>
      {
             validCity &&
              <h3 style={{color:"red",textAlign:"center"}}>search valid city</h3>
       }
      {
        CardsObj.map(function(element,index){
           return <Card key={index} data={element}/>
        })
      }
      </MDBRow>
    </>
  );
}

export default App;
