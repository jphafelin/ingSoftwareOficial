import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"
import "../../styles/programacion.css"
import logoClubTenisVdM from "../../img/logo.png";
import claseTenis from "../../img/clasetenis.jpg";
import torneoTenis from "../../img/torneotenis.jpg";


export const Programacion = () => {
    const [isEnrolled, setIsEnrolled] = useState(false);
    

    const handleEnrollClick = () => {
        setIsEnrolled(!isEnrolled);
    };
    

    
  
    return (
      <div className="container">
        
        <table class="table table-bordered border-dark programacion">
<thead>
<tr><th colspan="12" class="text-center border border-dark">Octubre 2024</th></tr>
</thead>
<thead>
<tr><th class="text-center col-2 border border-dark">Lunes</th><th class="text-center col-2 border border-dark">Martes</th><th class="text-center col-2 border border-dark">Miércoles</th><th class="text-center col-2 border border-dark">Jueves</th><th class="text-center col-2 border border-dark">Viernes</th><th class="text-center col-1 border border-dark">Sábado</th><th class="text-center col-1 border border-dark">Domingo</th></tr>
</thead>
<tbody>
<tr class="bg-primary text-light border border-dark">
<td class="bg-secondary text-center col-2 border border-dark"></td>
<td class="bg-primary text-center col-2 border border-dark">1</td>
<td class="bg-primary text-center col-2 border border-dark">2</td>
<td class="bg-primary text-center col-2 border border-dark">3</td>
<td class="bg-primary text-center col-2 border border-dark">4</td>
<td class="bg-primary text-center col-2 border border-dark">5</td>
<td class="text-center col-1 border border-dark">6</td>
</tr>
<tr>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark">
<p></p>
</td>
<td class="col-2 border border-dark"></td>
<td class="col-1 border border-dark"></td>
</tr>
<tr class="bg-primary text-light">
<td class="text-center border border-dark">7</td>
<td class="text-center border border-dark">8</td>
<td class="text-center border border-dark">9</td>
<td class="text-center border border-dark">10</td>
<td class="text-center border border-dark">11</td>
<td class="text-center border border-dark">12</td>
<td class="text-center border border-dark">13</td>
</tr>
<tr class="border border-dark">
<td class="col-2 border border-dark">
<p></p>
</td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-1 border border-dark"></td>
</tr>
<tr class="bg-primary text-light">
<td class="text-center border border-dark">14</td>
<td class="text-center border border-dark">15</td>
<td class="text-center border border-dark">16</td>
<td class="text-center border border-dark">17</td>
<td class="text-center border border-dark">18</td>
<td class="text-center border border-dark">19</td>
<td class="text-center border border-dark">20</td>
</tr>
<tr>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark">
<div className="card">
    <div className="card-body">
    <h5 class="card-title">Clase de Tenis</h5>
    <img src={claseTenis} width={100} height={100} className="rounded"/>
    <p class="card-text">10:00 - 12:00</p>
    <a
                                        
                                        className="btn btn-primary"
                                        onClick={handleEnrollClick}
                                    >
                                        {isEnrolled ? "Desinscribir" : "Inscribir"}
                                    </a>

    </div>

</div>
</td>
<td class="col-2 border border-dark">
    
</td>
<td class="col-2 border border-dark">
<p></p>
</td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark">
<div className="card">
    <div className="card-body">
    <h5 class="card-title">Torneo de Tenis</h5>
    <img src={torneoTenis} width={100} height={100} className="rounded"/>
    <p class="card-text">10:00 - 16:00</p>
    <a
                                        
                                        className="btn btn-primary"
                                        
                                    >
                                         Inscribirme
                                    </a>

    </div>

</div>
</td>
<td class="col-1 border border-dark"></td>
</tr>
<tr class="bg-primary text-light">
<td class="text-center border border-dark">21</td>
<td class="text-center border border-dark">22</td>
<td class="text-center border border-dark">23</td>
<td class="text-center border border-dark">24</td>
<td class="text-center border border-dark">25</td>
<td class="text-center border border-dark">26</td>
<td class="text-center border border-dark">27</td>
</tr>
<tr>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"><div className="card">
    <div className="card-body">
    <h5 class="card-title">Clase de Tenis</h5>
    <img src={claseTenis} width={100} height={100} className="rounded"/>
    <p class="card-text">10:00 - 12:00</p>
    <a
                                        
                                        className="btn btn-primary"
                                        
                                    >
                                         Inscribirme
                                    </a>

    </div>

</div></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark">
<p></p>
</td>
<td class="col-2 border border-dark"></td>
<td class="col-1 border border-dark"></td>
</tr>
<tr class="bg-primary text-light">
<td class="text-center border border-dark">28</td>
<td class="text-center border border-dark">29</td>
<td class="text-center border border-dark">30</td>
<td class="text-center border border-dark">31</td>
<td class="text-center border border-dark"></td>
<td class="text-center border border-dark"></td>
<td class="text-center border border-dark"></td>
</tr>
<tr>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark"></td>
<td class="col-2 border border-dark text-danger"></td>
<td class="col-2 border border-dark"></td>
<td class="col-1 border border-dark"></td>
</tr>
</tbody>
</table>
      </div>
    );
  };
  
