<template>
    <div>
        <div class="form-group">
            <label for="nomeCategoria">Digite o nome da categoria:</label>
            <input class="form-control input-text" required v-model="nomeCategoria" id="nomeCategoria">
            <br>
            <br>
            <div class="row">
                <div class="col-md-5">
                    <label for="nomeProduto">Digite o nome do produto:</label>
                    <input class="form-control input-text" required v-model="nomeProduto" id="nomeProduto">
                </div>
                <div class="col-md-5">
                    <label for="precoProduto">Digite o preço do produto:</label>
                    <input class="form-control input-text" type="number" required v-model="precoProduto"
                           id="precoProduto">
                </div>
                <br>
                <div class="col-md-2">
                    <button v-on:click="adicionarProduto()" class="btn btn-success">Adicionar a lista</button>
                </div>
            </div>

            <div>
                <hr>
                <label>Produtos a serem adicionados</label>
                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="produto in produtosAdicionados">
                        <td>{{produto.nome}}</td>
                        <td>{{produto.preco}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <button v-on:click="salvarCategoria()">
                Salvar
            </button>
        </div>

    </div>

</template>

<script>
    import Vue from 'vue'

    export default {
        name: "cadastro",
        data() {
            return {
                columns: [
                    {
                        label: 'id',
                        field: 'id'
                    },
                    {
                        label: 'nome',
                        field: 'nome'
                    }
                ],
                nomeProduto: '',
                precoProduto: '',
                produtosAdicionados: [],
                categorias: [],
                rows: []
            };
        },
        created() {

        },
        props: {},
        methods: {
            adicionarProduto: function () {
                this.produtosAdicionados.push({nome: this.nomeProduto, preco: this.precoProduto});
            },

            salvarCategoria: function () {
                Vue.http.post(`http://localhost:8081/categorias/salvar`, {
                    id: null,
                    nome: this.nomeCategoria,
                    produtos: this.produtosAdicionados
                })

                this.nomeCategoria = '';
                this.nomeProduto = '';
                this.precoProduto = '';
                this.produtosAdicionados = [];
            }
        },
    }
</script>

<style scoped>

</style>