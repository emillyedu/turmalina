import { ExampleTwoComponent } from './example-two/example-two.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent {

    instructions = `
    # Introdução ao Turmalina Schema utilizando o Microdata

    ## O que é e por que utilizar o Microdata?
    
    Microdata é um tipo de linguagem de marcação embutida no HTML5 para melhorar a legibilidade das páginas web por máquinas. Esse tipo de linguagem de marcação atribui rótulos para identificar partes individuais do conteúdo, permitindo que mecanismos de busca e web crawlers possam extrair e processar os microdados de uma página da web. Ao utilizar este tipo de padrão para descrição de dados, você possibilita que mecanismos de busca entendam estas informações dentro do contexto semântico definido e facilita que outras aplicações reconheçam e importem esses dados do seu site.
    
    Em alto nível, microdata é uma especificação para incorporar dados legíveis por máquina em documentos HTML. Microdados consistem em pares nome/valor (conhecidos como itens) definidos de acordo com um vocabulário. Ao representar informações através do Microdata utilizamos elementos pertencentes a um vocabulário específico que deve ser referenciado no documento HTML. O vocabulário é a especificação das propriedades utilizadas e qual tipo de informação elas representam. Atualmente, vocabulários de microdata de propósito geral podem ser encontrados em sites como https://schema.org/, que contém especificações para descrever eventos, empresas, pessoas, produtos, etc. 
    
    ## O que é e por que utilizar o Turmalina Schema?
    
    Seguindo essa perspectiva, o Turmalina Schema é um vocabulário desenvolvido para descrever tipos e propriedades utilizados em dados disponibilizados por portais de transparência fiscal. O objetivo do Turmalina Schema é ser um esquema de marcação de dados para tornar portais de transparência fiscal mais compreensíveis para mecanismos de busca e web crawlers. Nesta documentação, você poderá encontrar as propriedades referentes a cada tipo e uma descrição de suas finalidades e utilização.
    
    Para adicionar informações ao seu conteúdo da web basta utilizar o vocabulário do Turmalina Schema em conjunto com o Microdata. Este guia ajudará você a se familiarizar com o básico do Microdata e do Turmalina Schema, a fim de que você possa começar a adicionar marcações às suas páginas web.
    
    ## Sintaxe do Microdata
    
    Como dito anteriormente, o modelo Microdata consiste em grupos de pares de nome/valor conhecidos como itens. Cada nome nesses pares é definido como uma propriedade, podendo ter um ou mais valores. O valor de uma propriedade pode ser uma string, um número float ou inteiro, assim como qualquer outro tipo de dado, incluindo outro grupo de pares nome/valor (i.e um item).
    
    O Microdata apresenta cinco atributos globais simples (disponíveis para uso de qualquer elemento HTML) que fornecem contexto para máquinas sobre seus dados. Os cinco atributos são: itemscope, itemtype, itemprop, itemid e itemref. Para o uso do Turmalina Schema, utilizaremos apenas os atributos itemscope, itemtype e itemprop. A seguir, vamos examiná-los em detalhes. 
    
    | ATRIBUTO | DESCRIÇÃO |
    | ------ | ------ |
    | itemscope | Este atributo é utilizado para demarcar o escopo de um item. O atributo itemscope é um atributo booleano que informa que há um modelo Microdata naquele escopo, demarcando no HTML onde ele inicia.  | 
    | itemtype | O atributo itemtype contém como valor uma URL válida que define o tipo do item e fornece o contexto para as propriedades referentes a ele. | 
    | itemprop | Este atributo define uma propriedade do item. | 
    
    Como visto, a sintaxe básica inclui os atributos itemscope e itemtype para definir um item, e o atributo itemprop para descrever cada propriedade do item. Sendo os tipos dos itens especificados por meio do atributo itemtype, que assume valores de URLs válidas definidas através do vocabulário de escolha. Neste caso, podem assumir as URLs de cada tipo registrado no vocabulário do Turmalina Schema; por exemplo, o Turmalina Schema define tipos como http://turmalinaschema.org/Bid ou http://turmalinaschema.org/Contracts.
    
    ## Como marcar seu conteúdo usando o Microdata e o Turmalina Schema?
    
    Vamos começar com um exemplo concreto. Imagine que tenhamos uma página que contém uma tabela com informações sobre licitações. Seu código HTML pode ser parecido com este:
    
    \`\`\`html
    <div>
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td
                <td>01/03/2021</td
                <td>COMERCIAL VALFARMA LTDA</td
                <td>02.600.770/0001-09</td
                <td>R$ 3.535.816,11</td>
            </tr>
        </table>
    </div>
    \`\`\`
    
    \`\`\`html
    <div>
        <caption>Descrição</caption>
        <!-- Cabeçalho da tabela  -->
        <div>
            <div>Nome da unidade gestora</div>
            <div>Código da unidade gestora</div>
            <div>Número da licitação</div>
            <div>Modalidade de licitação</div>
            <div>Objeto da licitação</div>
            <div>Data da publicação</div>
            <div>Data de realização</div>
            <div>Nome do Participante</div>
            <div>CNPJ do paricipante</div>
            <div>Valor da proposta</div>
        </div>
        <!-- Dados referentes a certa linha da tabela  -->
        <div>
            <div>Secretaria Municipal de Saúde</div>
            <div>00000.000-0</div>
            <div>10.017/2021</div>
            <div>Pregão Eletrônico</div>
            <div>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</div>
            <div>01/04/2021</div>
            <div>01/03/2021</div>
            <div>COMERCIAL VALFARMA LTDA</div>
            <div>02.600.770/0001-09</div>
            <div>R$ 3.535.816,11</div>
        </div>
    </div>
    \`\`\`
    
    ### Primeiro passo: itemscope e itemtype
    Para começar precisamos identificar a seção da página que contém a tabela com as informações sobre licitações. Para isso, adicionamos o elemento itemscope à tag HTML que inclui as informações sobre o item que desejamos:
    
    
    \`\`\`html
    <div>
        <table itemscope>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td>
                <td>01/03/2021</td>
                <td>COMERCIAL VALFARMA LTDA</td>
                <td>02.600.770/0001-09</td>
                <td>R$ 3.535.816,11</td>>
            </tr>
        </table>
    </div>
    \`\`\`
    
    \`\`\`html
    <div itemscope>
        <caption>Descrição</caption>
        <!-- Cabeçalho da tabela  -->
        <div>
            <div>Nome da unidade gestora</div>
            <div>Código da unidade gestora</div>
            <div>Número da licitação</div>
            <div>Modalidade de licitação</div>
            <div>Objeto da licitação</div>
            <div>Data da publicação</div>
            <div>Data de realização</div>
            <div>Nome do Participante</div>
            <div>CNPJ do paricipante</div>
            <div>Valor da proposta</div>
        </div>
        <!-- Dados referentes a certa linha da tabela  -->
        <div>
            <div>Secretaria Municipal de Saúde</div>
            <div>00000.000-0</div>
            <div>10.017/2021</div>
            <div>Pregão Eletrônico</div>
            <div>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</div>
            <div>01/04/2021</div>
            <div>01/03/2021</div>
            <div>COMERCIAL VALFARMA LTDA</div>
            <div>02.600.770/0001-09</div>
            <div>R$ 3.535.816,11</div>
        </div>
    </div>
    \`\`\`
    
    Ao adicionarmos o itemscope estamos especificando que o HTML contém um bloco sobre um determinado item. Entretanto, não é suficiente especificar que existe um item no HTML, precisamos especificar também de qual tipo esse item é. Para tanto, podemos utilizar o atributo itemtype imediatamente após o itemscope.
    \`\`\`html
    <div>
        <table itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td>
                <td>01/03/2021</td>
                <td>COMERCIAL VALFARMA LTDA</td>
                <td>02.600.770/0001-09</td>
                <td>R$ 3.535.816,11</td>
            </tr>
        </table>
    </div>
    \`\`\`
    \`\`\`html
    <div itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
        <caption>Descrição</caption>
        <!-- Cabeçalho da tabela  -->
        <div>
            <div>Nome da unidade gestora</div>
            <div>Código da unidade gestora</div>
            <div>Número da licitação</div>
            <div>Modalidade de licitação</div>
            <div>Objeto da licitação</div>
            <div>Data da publicação</div>
            <div>Data de realização</div>
            <div>Nome do Participante</div>
            <div>CNPJ do paricipante</div>
            <div>Valor da proposta</div>
        </div>
        <!-- Dados referentes a certa linha da tabela  -->
        <div>
            <div>Secretaria Municipal de Saúde</div>
            <div>00000.000-0</div>
            <div>10.017/2021</div>
            <div>Pregão Eletrônico</div>
            <div>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</div>
            <div>01/04/2021</div>
            <div>01/03/2021</div>
            <div>COMERCIAL VALFARMA LTDA</div>
            <div>02.600.770/0001-09</div>
            <div>R$ 3.535.816,11</div>
        </div>
    </div>
    \`\`\`
    
    Ao utilizarmos o itemtype estamos especificando que o item contido nesse bloco é do tipo Bidding, ou seja, trata sobre Licitações como definido na documentação de tipos do Turmalina Schema. Como visto, os tipos dos itens são informados como URLs, neste caso https://turmalinaschema.vercel.app/documentation/bidding. <div> </div>
    OBS: vale ressaltar que a marcação do item precisa ser feita na tag imediatamente superior a das propriedades. Um exemplo é o caso da table ilustrado anteriormente, nele o itemscope e o itemtype não poderiam ser colocados na div que contém a table, pois é a table a tag imediatamente superior.
    ### Segundo passo: itemprop
    Além de indicarmos o escopo do item no HTML com o itemscope e especificarmos sobre o que é o item com o itemtype, podemos indicar mais informações sobre esse item. No microdata chamamos essas informações adicionais sobre um item de propriedades. Para rotular as propriedades de um item utilizamos o atributo itemprop. Por exemplo, para identificar a modalidade da Licitação no HTML, adicionamos itemprop=”bidModality” ao elemento que envolve o nome da modalidade de licitação.
    
    Observação: No link do itemtype (https://turmalinaschema.vercel.app/documentation/bidding, por exemplo) há uma lista completa de todas as propriedades que podemos associar a uma licitação.
    
    \`\`\`html
    <div>
        <table itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="bidID">Número da licitação</th>
                <th itemprop="bidModality">Modalidade de licitação</th>
                <th itemprop="object">Objeto da licitação</th>
                <th itemprop="publicationDate">Data da publicação</th>
                <th itemprop="realizationDate">Data de realização</th>
                <th itemprop="bidderName">Nome do Participante</th>
                <th itemprop="identificationNumber">CNPJ do paricipante</th>
                <th itemprop="bidderProposalAmount">Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">Secretaria Municipal de Saúde</th>
                <td itemprop="managementUnitID">00000.000-0</th>
                <td itemprop="bidID">10.017/2021</th>
                <td itemprop="bidModality">Pregão Eletrônico</th>
                <td itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</th>
                <td itemprop="publicationDate">01/04/2021</th>
                <td itemprop="realizationDate">01/03/2021</th>
                <td itemprop="bidderName">COMERCIAL VALFARMA LTDA</th>
                <td itemprop="identificationNumber">02.600.770/0001-09</th>
                <td itemprop="bidderProposalAmount">R$ 3.535.816,11</th>
            </tr>
        </table>
    </div>
    \`\`\`
    
    \`\`\`html
    <div>
        <div itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <div>
                <div itemprop="managementUnitName">Nome da unidade gestora</div>
                <div itemprop="managementUnitID">Código da unidade gestora</div>
                <div itemprop="bidID">Número da licitação</div>
                <div itemprop="bidModality">Modalidade de licitação</div>
                <div itemprop="object">Objeto da licitação</div>
                <div itemprop="publicationDate">Data da publicação</div>
                <div itemprop="realizationDate">Data de realização</div>
                <div itemprop="bidderName">Nome do Participante</div>
                <div itemprop="identificationNumber">CNPJ do paricipante</div>
                <div itemprop="bidderProposalAmount">Valor da proposta</div>
            </div>
            <!-- Dados referentes a certa linha da tabela  -->
            <div>
                <div itemprop="managementUnitName">Secretaria Municipal de Saúde</div>
                <div itemprop="managementUnitID">00000.000-0</div>
                <div itemprop="bidID">10.017/2021</div>
                <div itemprop="bidModality">Pregão Eletrônico</div>
                <div itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</div>
                <div itemprop="publicationDate">01/04/2021</div>
                <div itemprop="realizationDate">01/03/2021</div>
                <div itemprop="bidderName">COMERCIAL VALFARMA LTDA</div>
                <div itemprop="identificationNumber">02.600.770/0001-09</div>
                <div itemprop="bidderProposalAmount">R$ 3.535.816,11</div>
            </div>
        </div>
    </div>
    \`\`\`
    
    ## Turmalina Schema: tipos e propriedades
    Durante todo o exemplo anterior, utilizamos o tipo Bidding fornecido pelo vocabulário Turmalina Schema. Entretanto, o Turmalina Schema descreve uma variedade de outros tipos, cada um com seu próprio conjunto de propriedades que podem ser utilizadas para descrever os itens. Abaixo segue uma lista com os tipos do Turmalina Schema e seus respectivos links:
    
    - PlanningInstrument - https://turmalinaschema.vercel.app/documentation/planningInstrument
    - Contract - https://turmalinaschema.vercel.app/documentation/contract
    - Agreement - https://turmalinaschema.vercel.app/documentation/agreement
    - BudgetRevenue - https://turmalinaschema.vercel.app/documentation/budgetRevenue
    - ExtraBudgetRevenue - https://turmalinaschema.vercel.app/documentation/extraBudgetRevenue
    - BudgetExpenditure - https://turmalinaschema.vercel.app/documentation/budgetExpenditure
    - ExtraBudgetExpenditure - https://turmalinaschema.vercel.app/documentation/extraBudgetExpenditure
    - EmployeeInformation - https://turmalinaschema.vercel.app/documentation/employeeInformation
    - PaymentDocument - https://turmalinaschema.vercel.app/documentation/paymentDocument
    - Bidding - https://turmalinaschema.vercel.app/documentation/bidding

    Nos links você também pode ver uma lista completa com as propriedades de cada tipo.
    
    ##  O caminho até os dados
    
    Existem situações em que os dados marcados são acessíveis apenas após uma série de interações com o website, como preenchimento de formulário e acionamento de botões. Assim, considera-se caminho até os dados a sequência de ações que um usuário deve executar para acessar os dados de uma página. A Turmalina pode ser enxergada como um usuário convencional que precisa executar ações para acessar dados. Dessa forma, essa sequência de ações deve ser explicitamente marcada como descrito nas próximas seções.
    
    ## Formulário
    
    Qualquer formulário necessário à busca de dados marcados deve por padrão efetuar alguma busca sem precisar ser explicitamente preenchido pelo usuário. Em síntese, espera-se que o formulário possua campos pré-populados que possibilitem alguma busca padrão. 
    
    ## Marcação de elementos acionáveis
    
    Qualquer elemento que precisa ser explicitamente acionado pelo usuário para acessar dados marcados deve conter a classe \`tm-execute\`. Dessa forma, quando a Turmalina acessar a respectiva página, ela saberá quais elementos deve acionar para encontrar os dados da página.
    
    ### Exemplo
    
    Este exemplo demonstra como proceder em casos em que os dados não são diretamente acessíveis, sendo necessário marcar o caminho até esses dados.
    Neste exemplo, os dados sobre licitação são acessíveis apenas após a submissão do formulário e acionamento do elemento de detalhamento. 
    
    <div class="img-md">
        <img src="../../../assets/images/md/pagina-inicial-licitacao.png" alt="Página inicial licitação"/>
    </div>

    1. Esse formulário segue a especificação proposta, apresentando uma busca de dados padrão.
    2. O botão de pesquisa deve conter a classe \`tm-execute\`, pois ele precisa ser explicitamente acionado para trazer os dados de licitação.
    
    <div class="img-md">
        <img src="../../../assets/images/md/licitacao-pos-pesquisa.png" alt="Página de licitação pós pesquisa"/>
    </div>

    3. A página de detalhamento da licitação só é aberta apenas após acionamento do elemento destacado. Portanto, ele precisa conter a classe \`tm-execute\`.  
    
    \`\`\`html
    <!-- Adição da classe "tm-execute" ao elemento de detalhamento  -->
    <a _ngcontent-xmb-c319 class="tm-execute">04.064/2021</a>
    \`\`\`   
    
    Segue a página após acionamento do botão de detalhamento.

    <div class="img-md">
        <img src="../../../assets/images/md/detalhamento-licitacao.png" alt="Página de detalhamento"/>
    </div>

    Dessa forma, a Turmalina executará a sequência de passos marcada, acionando o botão de pesquisa e o elemento de detalhamento da licitação para acessar corretamente todos os dados referentes à licitação. 
    
    ## Turmalina Schema: Boas práticas
    - Lembrar de fazer a demarcação dos items com o itemscope e o itemtype sempre na tag imediatamente superior às suas propriedades, caso contrário o crawler não conseguirá identificá-las.
    - Evitar o uso de iframes, pois esses dificultam a navegação do cidadão por tornar o site mais confuso, assim como o funcionamento do crawler por impedir o seu bom funcionamento.
    - Evitar o uso excessivo de conteúdos dinâmicos Javascript, pelos mesmos motivos da segunda observação.
    - Evitar direcionar o usuário para páginas externas para acessar informações fiscais, pelos mesmos motivos da segunda observação.
    - Centralizar informações referentes a um item, ou seja, fazer com que todas as propriedades referentes a um determinado item estejam na mesma página, pois isso facilita o acesso à informação.
    `
    example_one = ` \`\`\`html
    <!--  MENU 1 -->
    <div itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="bidID">Número da licitação</th>
                <th itemprop="bidModality">Modalidade de licitação</th>
                <th itemprop="object">Objeto da licitação</th>
                <th itemprop="publicationDate">Data da publicação</th>
                <th itemprop="realizationDate">Data de realização</th>
                <th itemprop="bidderName">Nome do Participante</th>
                <th itemprop="identificationNumber">CNPJ do paricipante</th>
                <th itemprop="bidderProposalAmount">Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">Secretaria Municipal de Saúde</th>
                <td itemprop="managementUnitID">00000.000-0</th>
                <td itemprop="bidID">10.017/2021</th>
                <td itemprop="bidModality">Pregão Eletrônico</th>
                <td itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</th>
                <td itemprop="publicationDate">01/04/2021</th>
                <td itemprop="realizationDate">01/03/2021</th>
                <td itemprop="bidderName">COMERCIAL VALFARMA LTDA</th>
                <td itemprop="identificationNumber">02.600.770/0001-09</th>
                <td itemprop="bidderProposalAmount">R$ 3.535.816,11</th>
            </tr>
        </table>
    </div>
    \`\`\` `

    example_two = ` \`\`\`html
    <!--  MENU 2 -->
    <div itemscope itemtype="https://turmalinaschema.vercel.app/documentation/bidding">
        <div>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <div>
                <div itemprop="managementUnitName">Nome da unidade gestora</div>
                <div itemprop="managementUnitID">Código da unidade gestora</div>
                <div itemprop="bidID">Número da licitação</div>
                <div itemprop="bidModality">Modalidade de licitação</div>
                <div itemprop="object">Objeto da licitação</div>
                <div itemprop="publicationDate">Data da publicação</div>
                <div itemprop="realizationDate">Data de realização</div>
                <div itemprop="bidderName">Nome do Participante</div>
                <div itemprop="identificationNumber">CNPJ do paricipante</div>
                <div itemprop="bidderProposalAmount">Valor da proposta</div>
            </div>
            <!-- Dados referentes a certa linha da tabela  -->
            <div>
                <div itemprop="managementUnitName">Secretaria Municipal de Saúde</div>
                <div itemprop="managementUnitID">00000.000-0</div>
                <div itemprop="bidID">10.017/2021</div>
                <div itemprop="bidModality">Pregão Eletrônico</div>
                <div itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</div>
                <div itemprop="publicationDate">01/04/2021</div>
                <div itemprop="realizationDate">01/03/2021</div>
                <div itemprop="bidderName">COMERCIAL VALFARMA LTDA</div>
                <div itemprop="identificationNumber">02.600.770/0001-09</div>
                <div itemprop="bidderProposalAmount">R$ 3.535.816,11</div>
            </div>
        </div>
    </div>
    \`\`\` `

    menuOne : boolean = true;
    menuTwo : boolean = false;
    exampleOne(){
        this.menuTwo= false;
        this.menuOne= !this.menuOne;
    }
    exampleTwo(){
        this.menuOne= false;
        this.menuTwo= !this.menuTwo;
    }
}
