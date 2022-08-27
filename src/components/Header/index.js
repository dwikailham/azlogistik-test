import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiEdit2 } from 'react-icons/fi';
import { GiAchievement } from 'react-icons/gi';
import avatar from '../../assets/Avatar.png'
import './style.css'

export default function Header() {
    return (
        <div className='container'>
            <div className='row-header' >
                <Row>
                    <Col>
                        <img src={avatar} alt='avatar-icon' />
                    </Col>
                    <Col xs={5}>
                        <p className='text-header'>PT. Truk Maju Bersama</p>
                        <p className='achievment'> <GiAchievement /> Gold Transporter </p>
                    </Col>
                    <Col xs={5}>
                        <button className='btn-header'> <FiEdit2 /> Edit </button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
