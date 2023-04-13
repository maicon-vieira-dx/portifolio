import javascript from 'assets/javascript.png'
import html from 'assets/html.png'
import vue from 'assets/vue.png'
import atom from 'assets/atom.png'
import laravel from 'assets/laravel.png'
import php from 'assets/php.png'
import sql from 'assets/sql.png'
import sass from 'assets/sass.png'
import next from 'assets/next.png'
import bootstrap from 'assets/bootstrap.png'
import nuxt from 'assets/nuxt.png'
import tailwind from 'assets/tailwind.png'

import Timeline from 'components/TypesFloating/Timeline'
import Text from 'components/TypesFloating/Text'
import Carousel from 'components/TypesFloating/Carousel'

import roche from 'assets/roche.png'
import jj from 'assets/jj.png'
import caixa from 'assets/caixa.png'
import fiserv from 'assets/fiserv.jpg'
import danone from 'assets/danone.png'
import bayer from 'assets/bayer.png'
import vitamina from 'assets/vitamina.png'
import lec from 'assets/lec.png'

import alura from 'assets/alura-logo.png'
import fiap from 'assets/fiap.png'
import udemy from 'assets/udemy.png'

import aem from 'assets/aem.png'
import clickup from 'assets/clickup.png'
import filezilla from 'assets/filezilla.png'

const logos = [javascript, html, vue, atom, laravel, php, sql, sass, next, bootstrap, nuxt, tailwind]
const companies = [roche, jj, caixa, fiserv, danone, bayer, vitamina, lec]

const profile = {
    Title: "Maicon Vieira da Costa",
    Subtitle: "Front-end Developer",
    Image: "/src/assets/profile.jpg",
    About: {
        Paragraph: "Sou uma pessoa bastante comunicativa e extrovertida, que se adapta facilmente a diferentes ambientes e equipes. Prezo sempre pela boa convivência, sabendo separar o pessoal do profissional. Dedico-me bastante aos estudos e aprendizado, buscando constantemente aprender algo novo e aprimorar minhas habilidades, especialmente quando sou desafiado e instruído. Possuo grande facilidade na absorção de informações importantes para tomadas de decisão e busco sempre inovar e agregar valor em tudo o que participo. Como disse <b>Blaise Pascal</b>: “<i>Ninguém é tão sábio que não tenha algo para aprender, e nem tão tolo que não tenha algo para ensinar</i>”.",

        
        Companies: companies,
        Softwares: [
            {
                Title: "Adobe Experience Manager",
                Describe: "Plataforma para desenvolvimentos de sites e personalização, otimização e análise de experiências digitais.",
                Image: aem
            },
            {
                Title: "ClickUp",
                Describe: "Plataforma de gerenciamento de projetos, tarefas, fluxo de trabalho, agendamento, rastreamento de tempo, colaboração em tempo real, entre outros.",
                Image: clickup
            },
            {
                Title: "Filezilla",
                Describe: "Utilizado para fazer upload e download de arquivos entre computadores remotos e servidores.",
                Image: filezilla
            }
        ]

    },
    TextFloating: [
        {
            Id: 1,
            Title: "PERFIL",
            Type: Text,
            Justify: "flex-start",
            Direction: "column",
            Width: "70",
            Paragraph: "Como <b>autônomo</b>, busco constantemente melhorar minhas habilidades, sou <b>focado</b> e <b>comunicativo</b>. Me esforço para otimizar meu código, visando melhorias na <b>performance</b> e <b>eficiência</b>. Tenho visão macro dos objetivos e projetos da equipe, contribuindo estrategicamente para a produtividade. Acredito em um <b>mindset de crescimento</b>, evoluindo constantemente a cada desafio e <i>feedback</i>. Para mais informações, segue abaixo o botão para download do meu currículo.",
            Button: "CURRÍCULO",
            Paste: '/curriculo_maicon_vieira.pdf',
        },
        {
            Id: 2,
            Title: "EDUCAÇÃO",
            Type: Timeline,
            Justify: "flex-end",
            Direction: "column",
            Width: "75",
            Button: "CERTIFICADOS",
            Paste: '/Certificados.zip',
            Items: [
                {
                    Date: "Julho 2015",
                    Locale: "Complexo Argos",
                    Description: "Pacote Office Avançado - Excel, PowerPoint e Word"
                },
                {
                    Date: "Março 2021",
                    Locale: "Etec Vasco Antonio Vechiarutti",
                    Description: "Técnico em Administração - Administrar empresas"
                },
                {
                    Date: "Outubro 2022",
                    Locale: "Plataformas de Cursos (Alura, Udemy, Fiap)",
                    Description: "Vue, React, Laravel, DevOps - Melhorar <i>hards/soft skills</i>."
                },
                {
                    Date: "Junho 2023",
                    Locale: "FIAP",
                    Description: "Analise e Desenvolvimento de Sistemas - Grade do facultativa."
                }
            ]
        },
        {
            Id: 3,
            Title: "CARREIRA",
            Type: Timeline,
            Justify: "flex-start",
            Direction: "column",
            Width: "70",
            Items: [
                {
                    Date: "AGOSTO 2020 - JULHO 2021",
                    Locale: "Ambev Jundiaí",
                    Description: "Jovem Aprendiz - Trabalhei na Refrigeranteira Ambev, administrando setores como Produção, Contabilidade, Logística e entre outros."
                },
                {
                    Date: "OUTUBRO 2021 - MARÇO 2023",
                    Locale: "Amplavisão",
                    Description: "Estágio de Programação - Durante o período na empresa de desenvolvimento e tecnologia, desempenhei diversas funções solo e em equipe, comO diversas funções: UX, UI, <i>Front-end</i> ou <i>Full-stack</i>."
                }
            ]
        },
        {
            Id: 4,
            Title: "CONHECIMENTOS",
            Type: Carousel,
            Justify: "center",
            Direction: "column",
            Width: "90",
            List: logos
        }
    ],
    Projects: {
        Title: 'PROJETOS',
        Repositories: [
            {
                Image: alura,
                Name: "Alura",
                Link: "https://github.com/Maicon900/2700-spring-boot-aula_5"
            },
            {
                Image: fiap,
                Name: "Alura",
                Link: "https://github.com/Maicon900/app_health"
            },
            {
                Image: fiap,
                Name: "Alura",
                Link: "https://github.com/Maicon900/Bayer"
            },
            {
                Image: udemy,
                Name: "Alura",
                Link: "https://github.com/Maicon900/Fight"
            },
            {
                Image: alura,
                Name: "Alura",
                Link: "https://github.com/Maicon900/react-context"
            },
            {
                Image: alura,
                Name: "Alura",
                Link: "https://github.com/Maicon900/react-native-ficando-online"
            },
            {
                Image: fiap,
                Name: "Alura",
                Link: "https://github.com/Maicon900/IdWallers"
            },
            {
                Image: fiap,
                Name: "Alura",
                Link: "https://github.com/Maicon900/ola-mundo-aula-4"
            },
        ]
    },
    Footer:
        {
            Titles: ["CONTATO", "REDES", "LOCALIZAÇÃO"],
            Email: "maicon10042001@gmail.com",
            CellPhone: "+55 (11) 992544661",
            Adress: "R. Haydee Dumanjin Mojola, 298"
    }

}

export default profile;