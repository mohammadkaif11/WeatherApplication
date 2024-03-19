import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Card({data}) {
  data.WeatherIcon=data.WeatherIcon.toString().padStart(2,'0');
  return (
    <MDBCol md='4' className="my-2" >
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol   md="8" lg="6" xl="4">
            <MDBCard  style={{ color: "#4B515D", borderRadius: "35px" ,backgroundColor:"#rgb(193 205 201)",width:"250px"}}>
              <MDBCardBody className="p-4">
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">
                   {data.city}
                  </MDBTypography>
                  <MDBTypography tag="h6">15:07</MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {data.Temperature.Metric.Value}°C{" "}
                  </MDBTypography>
                  <span className="small" style={{ color: "#868B94" }}>
                  {data.WeatherText}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 40 km/h</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 84% </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 0.2h </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={`https://developer.accuweather.com/sites/default/files/${data.WeatherIcon}-s.png`}
                      width="100px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBCol>
  );
}