import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTheme } from 'styled-components'
import {
  HeaderContainer,
  LinkItem,
  MobileMenu,
  MobileMenuList,
  MobileMenuContainer,
  LinkDiv,
  IconDiv,
  LinkItemDiv,
  CofirmModalContainer
} from "./styles";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuth } from '../../contexts/AuthContext';
import desktopLogo from '../../assets/images/logo-desktop.png';
import mobileLogo from '../../assets/images/logo-mobile.png';
import MainModal from "../Shared/MainModal";
import GradientButton from "../Shared/GradientButton";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";
import PopUpIconMenu from './../Shared/PopUpIconMenu';
import {
  BellActiveIcon,
  BellInActiveIcon,
  CloseIcon,
  DiscordIcon,
  MenuIcon,
  TelegramIcon,
  TwitterIcon,
  VerifiedIcon
} from "../Shared/SvgIcons";
import HeaderSearchBox from "../Shared/HeaderSearchBox";
import { LanguageSelect } from "../Shared/LanguageSelect";
import BiWallet from '@meronex/icons/bi/BiWallet';
import { ConnectWalletForm } from "../Shared/ConnectWalletForm";
import ResourcesDropDown from "../Shared/ResourcesDropDown";
import UserAvatar from "../Shared/UserAvatar";
import NotificationUserImage from '../../assets/images/notification-user-sample.png';
import PopUpNotificationItem from "../Shared/PopUpNotificationItem";
import PopUpUserProfileItem from "../Shared/PopUpUserProfileItem";
import { useCustomWallet } from "../../contexts/WalletContext";
import { useGlobal } from "../../contexts/GlobalContext";
import { useTranslation } from "react-i18next";

export const Header = (props) => {

  const { invokeServer } = useGlobal();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  const windowSize = useWindowSize();
  let navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation()

  const { auth } = useAuth();
  const { wallet, getWalletAddressBySessionKey } = useCustomWallet()
  const [isMenu, setIsMenu] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCreatorConfirm, setShowCreatorConfirm] = useState(false)
  const [avatar, setAvatar] = useState('');
  const [notItems, setNotItems] = useState([])
  const { t } = useTranslation();


  const viewTypeList = {
    en: {  label: 'USA', key: 'USA', icon: theme.images.flagUsa, active: true },
    fr: { label: 'FRANCH', key: 'FR', icon: theme.images.flagFr, active: false}
  }

  // const notificationList = [
  //   { id: 1, userName: 'User1', userImage: NotificationUserImage, text: 'has commented on your item', date: 'Today 15:45' },
  //   { id: 2, userName: 'User2', userImage: NotificationUserImage, text: 'has commented on your item', date: 'Today 23:40' },
  //   { id: 3, userName: 'User3', userImage: NotificationUserImage, text: 'has commented on your item', date: 'Today 21:25' }
  // ]

  const menuInfo = [
    { id: 0, name: 'Explorer', action: () => { navigate('/explorer') } },
    { id: 1, name: 'Creators', action: () => { navigate('/creators') } },
    { id: 2, name: 'Collections', action: () => { navigate('/collections') } },
    { id: 3, name: 'Unlisted NFTs', action: () => { navigate('/offer') } },
  ];

  const [menuTitle, setMenuTitle] = useState(location?.pathname === '/explorer' ? menuInfo[0].name : location?.pathname === '/creators' ? menuInfo[1].name : location?.pathname === '/offer' ? menuInfo[2].name : location?.pathname === '/collections' ? menuInfo[2].name : 'Explorer');

  const handleConnectWallet = () => {
    setIsMenu(false);
    setShowConnectWallet(true);
  }

  useEffect(() => {
    if (auth.isLoggedIn !== true) {
      if (location.pathname.includes('/settings') || location.pathname.includes('/profile')) {
        navigate('/')
      }
    }
  }, [auth.isLoggedIn])

  // const handleCreateConfirm = () => {
  //   setShowSignUp(false)
  //   setShowCreatorConfirm(true)
  // }

  // const handleCloseConfirm = () => {
  //   setShowCreatorConfirm(false)
  //   setShowSignUp(true)
  // }

  // const handleGotoCreateSignup = () => {
  //   navigate('/create-signup')
  //   setShowCreatorConfirm(false)
  // }

  useEffect(() => {
    auth.avatarURI && auth.avatarURI !== '' && setAvatar(auth.avatarURI)
  }, [auth.avatarURI])

  const handleMenu = (t) => {
    let tt = menuInfo.filter(item => item.name === t);
    if (tt.length > 0) {
      setMenuTitle(tt[0].name);
      tt[0].action();
    }
  }

  useEffect(() => {
    let ac = new AbortController();

    const loadNotification = () => {
      invokeServer('get', `/api/notification?address=${getWalletAddressBySessionKey()}`)
        .then(r => {
          if (ac.signal.aborted)
            return;

          if (r.data.items !== undefined && JSON.stringify(r.data.items) !== JSON.stringify(notItems)) {
            setNotItems(t => r.data.items);
          }
          setTimeout(loadNotification, 10000);
        })
        .catch(err => {
          console.log(`${err.message}`);
          if (ac.signal.aborted)
            return;
          setTimeout(loadNotification, 3000);
        })
    }

    loadNotification();

    return () => ac.abort();
  }, [])

  return (
    <>
      <HeaderContainer>
        {windowSize.width >= 1025 ? (
          <>
            <img
              src={desktopLogo}
              alt="logo"
              className="header-logo"
              onClick={() => navigate('/')}
            />
            <div className="nav-container">
              <div className="nav-links">
                {/* <LinkItem className="main-menu" onClick={() => navigate('/')}>Explore</LinkItem> */}
                <LinkItem className="main-menu">
                  <ResourcesDropDown
                    title={menuTitle}
                    handleClick={() => {
                      handleMenu(menuTitle)
                    }}
                    active={() => { return menuInfo.filter(t => location.pathname.includes(`/${t.name}`)).length > 0 }}
                  >
                    <LinkDiv>
                      {menuInfo.map(t => {
                        return (
                          <LinkItemDiv key={t.id}
                            onClick={() => handleMenu(t.name)}
                            active={menuTitle === t.name}
                          >
                            {t.name}
                          </LinkItemDiv>
                        )
                      })}
                    </LinkDiv>
                  </ResourcesDropDown>
                </LinkItem>
                <LinkItem
                  className="main-menu"
                  active={location.pathname.includes('/stats')}
                  onClick={() => navigate('/stats')}
                >
                  {t("Stats")}
                </LinkItem>
                <LinkItem className="main-menu">
                  <ResourcesDropDown title="Resources">
                    <LinkDiv>
                      <LinkItemDiv>{t("Discord community")}</LinkItemDiv>
                      <LinkItemDiv>{t("Docs")}</LinkItemDiv>
                      <LinkItemDiv>{t("Suggestions")}</LinkItemDiv>
                      <LinkItemDiv>{t("Blog")}</LinkItemDiv>
                      <LinkItemDiv>{t("Newsletter")}</LinkItemDiv>
                    </LinkDiv>
                    <IconDiv>
                      <TwitterIcon />
                      <DiscordIcon />
                      <TelegramIcon />
                    </IconDiv>
                  </ResourcesDropDown>
                </LinkItem>
              </div>
              <div className="nav-search">
                <HeaderSearchBox />
              </div>
              <div className="nav-lang">
                <LanguageSelect viewTypeList={viewTypeList} dropDownType="USD" />
              </div>
            </div>
            <div className="nav-profile">
              <div className="nav-logged-user-container">
                {auth.isLoggedIn && (
                  <>
                    <div className="nav-logged-user-section">
                      <PopUpIconMenu
                        width={'257px'}
                        right={'-110px'}
                        icon={notItems.length > 0 ? <BellActiveIcon size='25px' /> : <BellInActiveIcon size='25px' />}
                      >
                        <PopUpNotificationItem notificationList={notItems} />
                      </PopUpIconMenu>
                    </div>
                    <div className="nav-logged-user-section">
                      <div className='creator-icon'><VerifiedIcon /></div>
                      <PopUpIconMenu
                        width={'211px'}
                        icon={avatar !== '' ?
                          <img src={auth.avatarURI} alt='' width='24px' height='24px' /> :
                          <UserAvatar size='25px' isNaked />}
                      >
                        <PopUpUserProfileItem />
                      </PopUpIconMenu>
                    </div>
                  </>
                )}
                <div className="wallet-icon">
                  {
                    window.web3 ?
                      <Link to='/settings'>
                        <BiWallet />
                        <div className='web3-status'></div>
                      </Link>
                      :
                      <BiWallet onClick={handleConnectWallet} />
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <MobileMenuContainer>
              <img
                src={mobileLogo}
                alt="logo"
                className="header-logo"
                onClick={() => navigate('/')}
              />
              <div className="mobile-user-section">
                <div className="nav-logged-user-container">
                  {auth.isLoggedIn && (
                    <>
                      <div className="nav-logged-user-section">
                        <div className="color-section">
                          <PopUpIconMenu
                            width={'257px'}
                            right={'-110px'}
                            icon={notItems.length > 0 ? <BellActiveIcon size='25px' /> : <BellInActiveIcon size='25px' />}
                          >
                            <PopUpNotificationItem notificationList={notItems} />
                          </PopUpIconMenu>
                        </div>
                      </div>
                      <div className="nav-logged-user-section">
                        <div className="color-section">
                          <div className='creator-icon'><VerifiedIcon /></div>
                          <PopUpIconMenu
                            width={'211px'}
                            icon={avatar !== '' ?
                              <img src={auth.avatarURI} alt='' width='24px' height='24px' /> :
                              <UserAvatar size='25px' isNaked />}
                          >
                            <PopUpUserProfileItem />
                          </PopUpIconMenu>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="wallet-icon">
                    {
                      window.web3 ?
                        <Link to='/settings'>
                          <BiWallet />
                          <div className='web3-status'></div>
                        </Link>
                        :
                        <BiWallet onClick={handleConnectWallet} />
                    }
                  </div>
                </div>
                {isMenu ? (
                  <MobileMenu onClick={() => setIsMenu(false)}>
                    <CloseIcon onClick={() => setIsMenu(true)} />
                  </MobileMenu>
                ) : (
                  <MobileMenu onClick={() => setIsMenu(true)}>
                    <MenuIcon onClick={() => setIsMenu(false)} />
                  </MobileMenu>
                )}
              </div>
            </MobileMenuContainer>
            <MobileMenuList style={{ height: isMenu ? "calc(100vh - 64px)" : "0px" }}>
              <div>
                <div className="nav-container">
                  <div className="nav-search">
                    <HeaderSearchBox />
                  </div>
                  <div className="nav-lang">
                    <LanguageSelect viewTypeList={viewTypeList} dropDownType="USD" />
                  </div>
                </div>
                <div className="nav-links-mobile">
                  <LinkItem className="main-menu" onClick={() => { navigate('/explorer'); setIsMenu(false) }}>{t("Explorer")}</LinkItem>
                  <LinkItem className="main-menu" onClick={() => { navigate('/creators'); setIsMenu(false) }}>{t("Creators")}</LinkItem>
                  <LinkItem className="main-menu" onClick={() => { navigate('/collections'); setIsMenu(false) }}>{t("Collections")}</LinkItem>
                  <LinkItem className="main-menu" onClick={() => { navigate('/offer'); setIsMenu(false) }}>{t("Unlisted NFTs")}</LinkItem>
                  <LinkItem className="main-menu" onClick={() => { navigate('/stats'); setIsMenu(false) }}>{t("Stats")}</LinkItem>
                  <LinkItem className="main-menu">{t("Resources: Discord community")}</LinkItem>
                  <LinkItem className="main-menu">{t("Resources: Docs")}</LinkItem>
                  <LinkItem className="main-menu">{t("Resources: Suggestions")}</LinkItem>
                  <LinkItem className="main-menu">{t("Resources: Blog")}</LinkItem>
                  <LinkItem className="main-menu">{t("Resources: Newsletter")}</LinkItem>
                  <IconDiv>
                    <TwitterIcon />
                    <DiscordIcon />
                    <TelegramIcon />
                  </IconDiv>
                </div>
              </div>
            </MobileMenuList>
          </>
        )}

        {showSignIn && (
          <MainModal
            title={'Sign In'}
            handleClose={() => setShowSignIn(false)}>
            <SignInForm
              goToSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
              goToWallet={() => {
                setShowSignIn(false);
                setShowConnectWallet(true);
              }}
              onClose={() => setShowSignIn(false)}
            />
          </MainModal>
        )}

        {/* {showSignUp && (
          <MainModal
            title={'Sign Up'}
            handleClose={() => setShowSignUp(false)}>
            <SignUpForm
              goToSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
              onCreateConfirm={() => handleCreateConfirm()}
              onClose={() => setShowSignUp(false)}
            />
          </MainModal>
        )}

        {showCreatorConfirm && (
          <MainModal
            title={'Confirm'}
            width='418px'
            height={'282px'}
            handleClose={() => handleCloseConfirm()}
          >
            <CofirmModalContainer>
              <p>Are you sure you want to sign up as a creator?</p>
              <div>
                <GradientButton
                  isNoPadding
                  label='Yes'
                  height='41px'
                  handleClick={() => handleGotoCreateSignup()}
                />
                <GradientButton
                  isNoPadding
                  label='No'
                  height='41px'
                  isBlackMode
                  handleClick={() => handleCloseConfirm()}
                />
              </div>
            </CofirmModalContainer>
          </MainModal>
        )} */}

        {showConnectWallet && (
          <MainModal
            title={'My Wallet'}
            handleClose={() => setShowConnectWallet(false)}>
            <ConnectWalletForm
              goToSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
              handleClose={() => setShowConnectWallet(false)}
            />
          </MainModal>
        )}

      </HeaderContainer>
    </>
  );
};