
<template>
    <div>
        <label for="categoriasId">Categorias:</label>
        <select name="categorias" required id="categoriasId"
                @change="getProdutos(categoriaSelecionada)"
                v-model="categoriaSelecionada">
            <option disabled>Escolha uma categoria</option>
            <option v-bind:value="categoria.id" v-for="categoria in categorias">{{categoria.nome}}
            </option>
        </select>
        <button v-on:click="excluirCategoria()" class="btn btn-danger">Excluir categoria</button>

        <vue-good-table
                :columns="columns"
                :rows="rows"
                :search-options="{
        enabled: true,
      }"
                :pagination-options="{
        enabled: true,
        perPage: 5,
      }"
                styleClass="vgt-table striped bordered"></vue-good-table>
    </div>
</template>

<script>
    import Vue from 'vue';
    // import VueGoodTable from 'vue-good-table';
    // import the styles
    // import 'vue-good-table/dist/vue-good-table.css';

    // Vue.use(VueGoodTable);

    export default {
        name: 'grid',
        data() {
            return {
                categorias: [],
                categoriaSelecionada: '',
                columns: [
                    {
                        label: 'Id',
                        field: 'id'
                    },
                    {
                        label: 'Nome',
                        field: 'nome'
                    }
                ],
                rows: []
            }
        },
        //
        props: {},
        components: {
            // VueGoodTable
        },
        methods: {
            // getCategorias: function () {
            //     Vue.http.get(`http://localhost:8081/categorias/`).then((res) => {
            //         // Depois que a requisição terminar, passamos o resultado para função dispatch que se encarregará de atualizar a mutation
            //         console.log(res);
            //         this.rows = res.body;
            //
            //     });
            // },
            getCategorias: function () {
                Vue.http.get(`http://localhost:8081/categorias/`).then((res) => {
                    // Depois que a requisição terminar, passamos o resultado para função dispatch que se encarregará de atualizar a mutation
                    console.log(res);
                    this.comboBox(res.data);

                });
            },

            comboBox: function (resposta) {
                var vetorCategorias = [];

                resposta.forEach(function (categoria) {
                    vetorCategorias.push(
                        {
                            id: categoria.id,
                            nome: categoria.nome
                        }
                    );
                })
                this.categorias = vetorCategorias;
            },

            getProdutos: function (idCategoria) {
                Vue.http.get(`http://localhost:8081/categorias/` + idCategoria).then(res => {
                    this.rows = res.data.produtos
                })
            },
            excluirCategoria: function () {
                if (confirm("Deseja excluir esta categoria?")) {
                    Vue.http.delete(`http://localhost:8081/categorias/` + this.categoriaSelecionada).then(response => {
                            this.getCategorias();
                            this.rows = [{}];
                            this.categoriaSelecionada = 0;
                        })
                }
            }
        },
        created: function () {
            this.getCategorias();

            var idCategoria = this.$route.params.idCategoria;
            if (idCategoria) {
                this.categoriaSelecionada = idCategoria;
                this.getProdutos(idCategoria);
            }
        }
    };
</script>