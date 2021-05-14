import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
	BlurContainer,
	HamburgerMenuContainer,
	ListContainer,
	ListContainerAside,
	NavContainer,
	List,
	ListItem,
	ListAside,
	ListItemAside,
	HamburgerMenu,
} from './styles';

import { PrimaryButton } from '../../styles/shared/Button';

import { resumeUrl } from '../../utils/constants';

const Navbar = (props) => {
	const [showNavbar, setshowNavbar] = useState(true);
	const [showShadow, setshowShadow] = useState(false);

	const [showMenu, setshowMenu] = useState(false);

	let previousOffset;
	let currentOffset;

	const onScroll = () => {
		currentOffset = window.pageYOffset;

		if (previousOffset < currentOffset) {
			setshowShadow(false);
			setshowNavbar(false);
		}

		if (previousOffset > currentOffset) {
			setshowNavbar(true);
			setshowShadow(true);
		}

		if (showMenu) {
			setshowNavbar(true);
			setshowShadow(true);
		}

		previousOffset = currentOffset;

		if (currentOffset <= 50) setshowShadow(false);
	};

	useEffect(() => {
		previousOffset = window.pageYOffset;
		currentOffset = window.pageYOffset;

		onScroll(); //  initial call on component load
		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []);

	const showMenuOnClick = () => {
		setshowMenu(!showMenu);
		props.onSideBarToggle(showMenu);
		setshowNavbar(true);
		document.body.style.overflow = showMenu ? 'visible' : 'hidden'; //  disabling scroll when menu is open
	};

	const containerY = {
		hidden: { opacity: 0, translateY: -15 },
		visible: {
			opacity: 1,
			translateY: 0,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const listItemY = {
		hidden: { opacity: 0, translateY: -15 },
		visible: { opacity: 1, translateY: 0 },
	};

	//  mobile view animation
	const containerX = {
		hidden: { opacity: 0, translateX: 15 },
		visible: {
			opacity: 1,
			translateX: 0,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const listItemX = {
		hidden: { opacity: 0, translateX: 15 },
		visible: { opacity: 1, translateX: 0 },
	};

	const animation = useAnimation();
	const [ref, inView, entry] = useInView({
		threshold: 0.1,
		delay: 0.25,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		} else {
			animation.start('hidden');
		}
	}, [animation, inView]);

	return (
		<NavContainer menu={showMenu} navbar={showNavbar} shadow={showShadow}>
			<motion.div variants={containerY} initial="hidden" animate="visible">
				<motion.a variants={listItemY} href="#intro">
					Logo
				</motion.a>
			</motion.div>

			<HamburgerMenuContainer onClick={showMenuOnClick} isHidden={showMenu}>
				<HamburgerMenu
					// className={showMenu ? styles.close : styles.hamburgerMenu}

					isHidden={showMenu}
				></HamburgerMenu>
			</HamburgerMenuContainer>

			<BlurContainer isHidden={showMenu}></BlurContainer>

			<ListContainer>
				<List
					variants={containerY}
					initial="hidden"
					animate="visible"
					onClick={(e) => e.stopPropagation()}
					// stopping propagation of clickHandler to current and other children
				>
					<ListItem variants={listItemY}>
						<a href="#about">About</a>
					</ListItem>
					<ListItem variants={listItemY}>
						<a href="#experience">Experience</a>
					</ListItem>
					<ListItem variants={listItemY}>
						<a href="#projects">Projects</a>
					</ListItem>
					<ListItem variants={listItemY}>
						<a href="#contact">Contact</a>
					</ListItem>
					<ListItem variants={listItemY}>
						<PrimaryButton>
							<a href={resumeUrl} target="_blank" rel="noopener noreferrer">
								Résumé
							</a>
						</PrimaryButton>
					</ListItem>
				</List>
			</ListContainer>

			<ListContainerAside
				// isHidden={showMenu}
				style={
					showMenu
						? { transform: 'translateX(0)' }
						: { transform: 'translateX(100%)' }
				}
				onClick={showMenuOnClick} //  closing navbar when the blurred container is clicked
			>
				<ListAside
					ref={ref}
					variants={containerX}
					initial="hidden"
					animate={animation}
					onClick={(e) => e.stopPropagation()}
					// stopping propagation of clickHandler to current and other children
				>
					<ListItemAside variants={listItemX}>
						<a href="#about">About</a>
					</ListItemAside>
					<ListItemAside variants={listItemX}>
						<a href="#experience">Experience</a>
					</ListItemAside>
					<ListItemAside variants={listItemX}>
						<a href="#projects">Projects</a>
					</ListItemAside>
					<ListItemAside variants={listItemX}>
						<a href="#contact">Contact</a>
					</ListItemAside>
					<ListItemAside variants={listItemX}>
						<PrimaryButton>
							<a href={resumeUrl} target="_blank" rel="noopener noreferrer">
								Résumé
							</a>
						</PrimaryButton>
					</ListItemAside>
				</ListAside>
			</ListContainerAside>
		</NavContainer>
	);
};

export default Navbar;
