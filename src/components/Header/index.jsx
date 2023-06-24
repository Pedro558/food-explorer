import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiLogOut, FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import receipt from "../../assets/receipt.svg";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import {
  Container,
  Content,
  Logo,
  Nav,
  Favorites,
  NewDish,
  Search,
  Button,
  Logout,
} from "./styles";

export function Header({ search, functionButton }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { user, signOut } = useAuth();
  const { cart, orders } = useCart();
  const navigate = useNavigate();

  const isCartIsEmpty = cart.length === 0;

  function handleGoToCart() {
    navigate("/cart");
  }

  function handleGoToOrders() {
    navigate("/orders");
  }

  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={logo} alt="polígono azul" />
          <p className="text-logo">
            <strong>food explorer</strong>
            {user.isAdmin > 0 && <span>admin</span>}
          </p>
        </Logo>

          <Nav isVisible={menuIsVisible}>
            <Search>
              {<FiSearch size={20} />}
              <input
                type="text"
                placeholder="Busque pelas opções de pratos"
                onChange={(e) => {
                  search(e.target.value);
                }}
              />
            </Search>
            <div className="header-buttons">
              {user.isAdmin ? (
              <NewDish to="/new">Novo prato</NewDish>
            ) : (
              <Favorites type="button" onClick={functionButton}>
                Meus favoritos
              </Favorites>
            )}

            {user.isAdmin ? (
              <Button type="button" onClick={handleGoToOrders}>
                <img src={receipt} alt="receipt" />
                Pedidos<span>({orders.length})</span>
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleGoToCart}
                disabled={isCartIsEmpty}
              >
                <img src={receipt} alt="receipt" />
                Pedido <span>({cart.length})</span>
              </Button>
            )}

            <Logout to="/" onClick={signOut}>
              <FiLogOut />
              <span>Sair</span>
            </Logout>
            </div>
        </Nav>

        <button type="button" onClick={() => setMenuIsVisible(!menuIsVisible)}>
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  );
}

