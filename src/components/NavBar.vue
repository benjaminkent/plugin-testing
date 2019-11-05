<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/plugin">Plug in</router-link>
                </li>
                <li>
                    <router-link to="/springer-plugin">Springers plug-in</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
header {
    padding: 1rem 0;
    width: 100%;
    background-color: #eee;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        li {
            margin: 0 20px;
            a {
                color: #b200ff;
            }
            a:hover {
                color: #00ffc7;
            }
        }
    }
}
</style>