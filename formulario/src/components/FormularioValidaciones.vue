<template>
    <div class="page">
        <div class="formu">
            <vue-form :state="formstate" @submit.prevent="agregarUsuario" >
                <validate tag="label">
                    <span>Nombre: </span>
                    <input type="text" v-model="model.name" required name="name" />
                    <field-messages name="name" show="$touched">
                        <div slot="required">El nombre es requerido</div>
                    </field-messages>
                </validate>

                <validate tag="label">
                    <span>Edad: </span>
                    <input type="number" v-model.number="model.age" name="age" min="1" />
                </validate>

                <validate tag="label">
                    <span>Email: </span>
                    <input type="email" v-model="model.email" required name="email" />
                    <field-messages name="email" show="$touched">
                        <div slot="required">El email es requerido</div>
                        <div slot="email">El email no es válido</div>
                    </field-messages> 
                </validate>

                <validate tag="label" :custom="{'check-password': checkPassword}">
                    <span>Password: </span>
                    <input type="password" v-model="model.password" required name="password" />
                    <field-messages name="password" show="$touched">
                        <div slot="required">El password es requerido</div>
                        <div slot="check-password">El password debe tener al menos 8 carácteres, una mayúscula, una minúscula, un número y un carácter especial.</div>
                    </field-messages>
                </validate>

                <validate tag="label">
                    <span>Country:</span>
                    <select id="country" v-model="model.country" required name="country">
                        <option value="ar">Argentina</option>
                        <option value="ur">Uruguay</option>
                        <option value="ch">Chile</option>
                        <option value="pe">Peru</option> 
                    </select>
                </validate>
                
                <validate tag="label" class="rad">
                    <div>
                        <span>Forma de Pago:</span><br/>
                    </div>
                    <div>
                        <label for="credito">Tarjeta de Crédito</label>
                        <input type="radio" id="Tarjeta de crédito" v-model="model.pago" name="pago" value="Tarjeta de crédito"><br/>
                        
                        <label for="debito">Tarjeta de Débito</label>
                        <input type="radio" id="Tarjeta de debito" v-model="model.pago" name="pago" value="Tarjeta de debito"><br/>
                        
                        <label for="efectivo">Transferencia</label>
                        <input type="radio" id="Transferencia" v-model="model.pago" name="pago" value="Transferencia">
                    </div>
                </validate>
                
                <div>
                    <button type="submit" class="btn btn-success">Enviar</button>
                </div>
            </vue-form>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>País</th>
                        <th>Medio de pago</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(usuario, i) of usuarios" v-bind:key="i">
                        <td>{{ usuario.name }}</td>
                        <td>{{ usuario.age }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.password }}</td>
                        <td>{{ usuario.country }}</td>
                        <td>{{ usuario.pago }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        name: "FomrularioValidaciones",
        data(){
            return{
                formstate: {},
                model: {
                    name:"",
                    age: 1,
                    email: "",
                    password: "",
                    country: "ar",
                    pago: "credito",
                },
                usuarios: [],
            };
        },
        methods: {
            onSubmit(){
                if(this.formstate.$valid){
                    alert("Formulario Enviado!");

                    return;
                }
            },
            checkPassword(value){
                return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
                    value
                );
            },
            agregarUsuario(){
                var data = {
                    name: this.model.name,
                    age: this.model.age,
                    email: this.model.email,
                    password: this.model.password,
                    country: this.model.country,
                    pago: this.model.pago,
                };
                this.usuarios.push(data);
                console.log(this.usuarios);

                this.model.name = "";
                this.model.age = "";
                this.model.email = "";
                this.model.password = "";

                if(this.usuarios !== ""){
                    const tabla = document.querySelector('.table');

                    tabla.style.display = "flex";
                }
            }
        },
    };
</script>

<style scoped>
.page{
    width: 100%;
    padding: 50px;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 40px;
}
.formu{
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-content: center;
}
form{
    width: 330px;
    padding: 25px;

    background-color: rgba(221, 221, 221, 0.5);
    border: 3px solid rgba(85, 85, 85, 0.986);
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 30px;

    color: white;
}

.table{
    width: auto;
    height: auto;
    padding: 5px;

    border-radius: 5px;

    display: none;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 15px;

    color: white;

}

th{
    padding: 10px;
}


td{
    height: 40px;
    padding: 10px;
}

.rad{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
}

input{
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 5px;
}

select{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 5px;
}

</style>