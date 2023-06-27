import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft, FiUpload } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";
import { Select } from '../../components/Select'
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Content,
  ButtonBack,
  Form,
  SectionIngredients,
  InputWrapper,
} from "./styles";

export function Edit() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleRemoveDish() {
    const userInput = window.prompt("Digite 'remover' para confirmar a exclusão do prato:");

    if(userInput === 'remover'){
      await api.delete(`/dishes/${params.id}`);
      alert('Prato apagado com sucesso !')
      navigate('/')
    } else {
      alert('Você digitou a palavra errada')
    }
  }

  async function handleUpdateDish() {
    // if (!imageFile) {
    //   return alert("Adicione uma imagem para o prato");
    // }

    if (!title) {
      return alert("Adicione um titulo para o prato");
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato");
    }

    if (!category) {
      return alert("Adicione um categoria para o prato");
    }

    if (!price) {
      return alert("Adicione um preço para o prato");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente");
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api.put(`/dishes/${params.id}`, formData);
    alert("Prato atualizado com sucesso");
    navigate("/");
    setLoading(false);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { title, description, category, price, ingredients } =
        response.data;
      setTitle(title);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      {user.isAdmin && (
        <Content>
          <ButtonBack>
            <Link to='/'>
              {" "}
              <FiChevronLeft size={30} />
              Voltar
            </Link>
          </ButtonBack>

          <Form >
            <header>
              <legend>Editar prato</legend>
            </header>

            <InputWrapper>
              <div className='smallBox'>
                <label id='file' htmlFor='image'>
                  Imagem do prato
                  <div>
                    <FiUpload size={24} />
                    <span>Selecione a imagem</span>
                    <input
                      id='image'
                      type='file'
                      onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  </div>
                </label>
              </div>
              <Input
                label='name'
                title='Nome'
                type='text'
                placeholder='Ex.: Salada Ceasar'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

            <Select
                label='category'
                title='Categoria'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="refeições">Refeições</option>
                <option value="bebidas">Bebidas</option>
                <option value="sobremesas">Sobremesas</option>
              </Select>
            </InputWrapper>

            <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                <div>
                  {ingredients.map((ingredient, index) => (
                    <IngredientItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <IngredientItem
                    isNew
                    value={newIngredient}
                    placeholder='Adicionar'
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </SectionIngredients>
              <div className='smallBox'>
                <Input
                  label='price'
                  title='Preço'
                  type='text'
                  value={price}
                  placeholder='R$ 00,00'
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>
            <Textarea
              label='Description'
              title='Descrição'
              defaultValue={description}
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="btn-group">
              <button type='button' onClick={handleRemoveDish} className='btn-remove'>Excluir prato</button>

              <button type='button' onClick={handleUpdateDish} disabled={loading} className='btn-update'>
                {loading ? "Salvando alterações" : "Salvar alterações"}
              </button>
            </div>
          </Form>
        </Content>
      )}
      <Footer />
    </Container>
  );
}
