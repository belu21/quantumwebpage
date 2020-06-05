import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import be from "../images/clientes/financieras/logo-bancoeconomico.png"
import bcb from "../images/clientes/financieras/logo-bcb.svg.png";
import brinks from "../images/clientes/financieras/logo-brinks.png";
import colsanmartin from "../images/clientes/financieras/logo-cosanmartin.png";
import edv from "../images/clientes/financieras/logo-edv.png";
import fatima from "../images/clientes/financieras/logo-fatima.jpg";
import nazareno from "../images/clientes/financieras/logo-jes-nazareno.png";

import aduana from "../images/clientes/gobierno/logo-aduana.png";
import alcaldia from "../images/clientes/gobierno/logo-alcaldia_scz.png";
import comibol from "../images/clientes/gobierno/logo-comibol.png";
import gobernacion from "../images/clientes/gobierno/logo-gobernacion scz.jpg";
import minirelext from "../images/clientes/gobierno/logo-ministerio_de_relaciones_exteriores.png";

import gruporoda from "../images/clientes/industrias/logo-grupo-roda.png";
import guabira from "../images/clientes/industrias/logo-guabira.png";
import sao from "../images/clientes/industrias/logo-sao.png";
import roda from "../images/clientes/industrias/logo-grupo-roda.png";
import unagro from "../images/clientes/industrias/logo-sofia.png";

import petrobras from "../images/clientes/petroleras/logo-petrobras.png";
import repsol from "../images/clientes/petroleras/logo-repsol.png";
import ypfbandi from "../images/clientes/petroleras/logo-ypfb andina.png";
import ypfbtrans from "../images/clientes/petroleras/logo-YPFB Transporte.png";
import ypfbchaco from "../images/clientes/petroleras/logo-YPFBChaco.png";

import cotas from "../images/clientes/servicios/logo-cotas.png";
import cre from "../images/clientes/servicios/logo-CRE-removebg-preview.png";
import delapaz from "../images/clientes/servicios/logo-delapaz.png";
import elfec from "../images/clientes/servicios/logo-elfec.png";
import saguapac from "../images/clientes/servicios/logo-saguapac.png";

import entel from "../images/clientes/telecom/logo-entel.png";
import tigo from "../images/clientes/telecom/logo-tigo.svg";
import cotas2 from "../images/clientes/telecom/logo_cotas.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className="superior-service">
            <div className="container mb-5 jc-between" id="servicios">
                <h1 className="h1">Nuestros Clientes</h1>
                <div className="flex-service mb-5">
                    <div className="flex-service left-service m-0">
                        <p className="content">
                            CommIT SRL posee una variedad de clientes en todo el pais, junto con la excelencia en cada uno de los trabajos realizados.
                        </p>
                    </div>

                </div>
                <div className="cornell container pl-0" id="software">
                    <div className="jc-between flex-service" id="financieras">
                        <div className="left">
                            <h2 className="h2">Empresas Financieras</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3} style={{backgroundColor: "black"}}>
                                    <img src={be} alt="icon-be" style={{width: 120, height: 30, marginTop: "35%"}}/>
                                </Paper>
                                <Paper elevation={3}><img src={bcb} alt="icon-bcb" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={brinks} alt="icon-brinks" style={{width: 128, height: 90, marginTop: "17%"}}/></Paper>
                                <Paper elevation={3} style={{backgroundColor: "black"}}><img src={colsanmartin} alt="icon-snmtn" style={{width: 128, height: 80, marginTop: "19%"}}/></Paper>
                                <Paper elevation={3}><img src={edv} alt="icon-edv" style={{width: 128, height: 70, marginTop: "18%"}}/></Paper>
                                <Paper elevation={3}><img src={fatima} alt="icon-fatima" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={nazareno} alt="icon-nazareno" style={{width: 128, height: 50, marginTop: "30%"}}/></Paper>
                            </div>
                        </div>
                    </div>
                    <div className="cornell jc-between flex-service" id="gobierno">
                        <div className="left">
                            <h2 className="h2">Empresas del Gobierno</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3}><img src={aduana} alt="icon-adu" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={alcaldia} alt="icon-alcaldia" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={comibol} alt="icon-comibol" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={gobernacion} alt="icon-gobernacion" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={minirelext} alt="icon-minirelext" style={{width: 128, height: 128}}/></Paper>
                            </div>
                        </div>
                    </div>
                    <div className="cornell jc-between flex-service" id="industriales">
                        <div className="left">
                            <h2 className="h2">Empresas Industriales</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3}><img src={gruporoda} alt="icon-gruporoda" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={guabira} alt="icon-guabira" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={sao} alt="icon-sao" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={roda} alt="icon-roda" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={unagro} alt="icon-unagro" style={{width: 128, height: 128}}/></Paper>
                            </div>
                        </div>
                    </div>
                    <div className="cornell jc-between flex-service" id="petroleras">
                        <div className="left">
                            <h2 className="h2">Empresas Petrolerass</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3}><img src={petrobras} alt="icon-petrobras" style={{width: 128, height: 50, marginTop: "28%"}}/></Paper>
                                <Paper elevation={3}><img src={repsol} alt="icon-repsol" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3} style={{backgroundColor: "black"}}><img src={ypfbandi} alt="icon-ypfbandi" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3}><img src={ypfbtrans} alt="icon-ypfbtrans" style={{width: 128, height: 80, marginTop: "18%"}}/></Paper>
                                <Paper elevation={3}><img src={ypfbchaco} alt="icon-ypfbchaco" style={{width: 128, height: 128}}/></Paper>
                            </div>
                        </div>
                    </div>
                    <div className="cornell jc-between flex-service" id="emp_servicio">
                        <div className="left">
                            <h2 className="h2">Empresas de Servicios</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3} style={{backgroundColor: "black"}}><img src={cotas} alt="icon-cotas" style={{width: 128, height: 30, marginTop: "38%"}}/></Paper>
                                <Paper elevation={3}><img src={cre} alt="icon-cre" style={{width: 128, height: 80, marginTop: "18%"}}/></Paper>
                                <Paper elevation={3}><img src={delapaz} alt="icon-delapaz" style={{width: 128, height: 80, marginTop: "18%"}}/></Paper>
                                <Paper elevation={3}><img src={elfec} alt="icon-elfec" style={{width: 128, height: 80, marginTop: "18%"}}/></Paper>
                                <Paper elevation={3}><img src={saguapac} alt="icon-saguapac" style={{width: 128, height: 60, marginTop: "24%"}}/></Paper>
                            </div>
                        </div>
                    </div>
                    <div className="cornell jc-between flex-service" id="tele">
                        <div className="left">
                            <h2 className="h2">Empresas de Telecomunicaciones</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio eos error facere optio quibusdam ullam ut voluptates!
                                Blanditiis commodi dolores inventore, laborum nostrum possimus ratione tempora voluptatibus.</p>
                            <div className={classes.root}>
                                <Paper elevation={3}><img src={entel} alt="icon-entel" style={{width: 128, height: 128}}/></Paper>
                                <Paper elevation={3} style={{backgroundColor: "black"}}><img src={tigo} alt="icon-tigo" style={{width: 128, height: 128, padding: "4%"}}/></Paper>
                                <Paper elevation={3}><img src={cotas2} alt="icon-cotas2" style={{width: 128, height: 128,paddingTop: "2%", paddingLeft: "2%"}}/></Paper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
