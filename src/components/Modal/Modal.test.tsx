import React from "react";
import { useState } from "react"
import Modal from './Modal';
import { render, screen, fireEvent } from '@testing-library/react'


describe('Modal', () => {
    test('Should render Modal button', async () => {
        const setModalIsActive = () => {

        }
        render(
            <Modal buttonType='submit' buttonText='cliquer' htmlTextModal='bonjour' modalIsActive={false}
            handleActiveModal={setModalIsActive}/>
        )
        const openButton = screen.getByRole('button')
        expect(openButton.textContent).toBe('cliquer')
    });
    test('Should open the modal and see the close button', async () => {
        const setModalIsActive = () => {

        }
        render(
            <Modal buttonType='submit' buttonText='cliquer' htmlTextModal='bonjour' modalIsActive={true}
            handleActiveModal={setModalIsActive}/>
        )
        const modalText = screen.getByText('bonjour')
        expect(modalText.textContent).toBe('bonjourX')
    });
})
