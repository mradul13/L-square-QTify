import {React, useState} from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";

const Navbar = ({data, logo=false, search=false, feedback=false})=>{

    const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
	const navigate = useNavigate();

	const _toggleFeedBackModal = (value = false) => {
		setIsFeedBackModalOpen(value);
	};

	const _onSuccess = () => {
		// show toast
		showToast("Feedback Submitted", "success");
	};

    return (
    <div className={styles.wrapper}>
        <nav className={styles.navbar}>
            <div className={styles.logoWrapper} onClick={()=>{navigate('/')}}>
                {logo?<Logo id={styles.logo}></Logo>:null}
            </div>
            {search ? (
                <div className={styles.searchWrapper}>
                    <SearchBox placeholder="Search an album of your choice" data={data} />
                </div>
            ): null}
            {feedback?(
                <Button
                text="Give Feedback"
                eventHandler={{ event: "onClick", handler: () => _toggleFeedBackModal(true) }}
            />
            ):null}
            
        </nav>
        <FeedBackModal
				isOpen={isFeedBackModalOpen}
				onSuccess={_onSuccess}
				onDismiss={_toggleFeedBackModal}
		/>
    </div>
    )
}

export default Navbar;