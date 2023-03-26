import Modal from 'react-modal';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'
import '../modal-layouts.scss';
import './settings-modal.styles.scss';
import DeviceSettings from './device-settings/device-settings.component';
import AccountSettings from './account-settings/account-settings.component';
import UserProfileSettings from './user-profile-settings/user-profile-settings.component';
Modal.setAppElement('#root');

const SettingsModal = ({ closeModal, afterOpenModal, isModalOpen }) => {
    const afterOpenModalWrapper = async () => {
        if (afterOpenModal != null) afterOpenModal();
    }

    return (
        <Modal
            isOpen={ isModalOpen }
            onAfterOpen={ afterOpenModalWrapper }
            onRequestClose={ closeModal }
            className='modal-content fit settings-modal-content modal-layout-1'
            overlayClassName='modal-overlay'
            closeTimeoutMS={ 200 }
            contentLabel="Settings"
        >
            <div className='content'>
                <span className='header'>
                    <div className='title'>
                        Settings
                    </div>
                    <button className='close-button' onClick={ closeModal }><CloseIcon size={ '25px' } /></button>
                </span>
                <DeviceSettings isModalOpen={ isModalOpen } />
                <UserProfileSettings />
                <AccountSettings />
                
            </div>
            <div className='footer'>
                <div className='action-buttons-container'>
                    <button onClick={ closeModal }>Close</button>
                </div>
            </div>
            
        </Modal>
    );
    
}

export default SettingsModal;