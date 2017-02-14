<template lang="html">
    <div class="resume-render-wrapper">
        <table class="main">
            <tr>
                <td class="w-20">
                    <img src="{{url('assets/images/daiict-logo.jpg')}}">
                </td>

                <td class="intro w-80">
                    <h1>{{student.name}}</h1>
                    <p>
                        <b>Dhirubhai Ambani Institute of Information and Communication Technology</b>
                    </p>
                    <p>
                        <span class="w-60 inline-block">
                            <b>Email:</b> {{student.email}}
                        </span>
                        <span class="w-40 text-right">
                            <b>DOB:</b> {{student.dob}}
                        </span>
                    </p>
                    <p>
                        <b>Address:</b> {{student.address}}
                    </p>
                </td>

            </tr>

        </table>

        <table class="w-100 section">
            <tr>
                <td colspan="4" class="section-header">
                    <h3>EDUCATION</h3>
                </td>
            </tr>
            <tr>
                <th colspan="1">Degree</th>
                <th colspan="1">University/Institute</th>
                <th colspan="1">Year</th>
                <th colspan="1">CPI/Aggregate</th>
            </tr>

            <tr v-for="(degree, index) in student.degrees">
                <td>
                    <b>{{degree.name}}</b>
                </td>
                <td>
                    {{degree.institute}}
                </td>
                <td>
                    {{degree.duration}}
                </td>
                <td>
                    {{degree.score}}
                </td>
            </tr>
        </table>

        <table class="w-100 section">
            <tr>
                <td colspan="2" class="section-header">
                    <h3>SKILLS</h3>
                </td>
            </tr>
            <tr>
                <td class="w-30">
                    <b>Expertise Area/Area(s) of
                        Interest</b>
                </td>
                <td class="w-70">
                    {{student.expertise}}
                </td>
            </tr>
            <tr>
                <td class="w-30">
                    <b>Programming Language(s)</b>
                </td>
                <td class="w-70">
                    {{student.programming_languages}}
                </td>
            </tr>
            <tr>
                <td class="w-30">
                    <b>Tools and
                        Technologies</b>
                </td>
                <td class="w-70">
                    {{student.tools}}
                </td>
            </tr>
        </table>
        <div class="page-break"></div>
        <table class="w-100 section">
            <tr>
                <td colspan="2" class="section-header">
                    <h3>PROJECTS</h3>
                </td>
            </tr>

            <tr v-for="(project, index) in student.projects">
                <td class="w-80" valign="top">
                    <p>
                        <b>{{project.title}}</b>
                    </p>
                    <p>
                        {{project.description}}
                    </p>
                </td>
                <td class="w-20" valign="top">
                    <p>({{project.start}} - {{project.end}})</p>
                    <p v-show="project.team_size">Team Size - {{project.team_size}}</p>
                </td>
            </tr>
        </table>
        <table class="w-100 section">
            <tr>
                <td colspan="2" class="section-header">
                    <h3>AWARDS AND ACHIEVEMENTS</h3>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <ul class="list">
                            <li v-for="(award, index) in student.awards">
                                {{award.name}}
                            </li>
                    </ul>
                </td>
            </tr>
        </table>

        <table class="w-100 section">
            <tr>
                <td colspan="2" class="section-header">
                    <h3>INTERESTS AND HOBBIES</h3>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <ul class="list">
                        <li v-for="(hobby, index) in student.hobbies">
                            {{hobby.name}}
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {


    data () {
        return {
            student: studentData
        }
    }

}
</script>

<style lang="scss" scoped>
.resume-render-wrapper {
    margin: 40px;
    background: #ffffff;
    font-family: "Calibri", sans-serif;
    font-size: 12px;
    line-height: 1.5;

    & * {
        padding: 0;
        margin: 0;
    }

    .intro p {
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .main img {
        height: 150px;
        width: 150px;
    }

    .text-right {
        text-align: right;
    }

    .inline-block {
        display: inline-block;
    }

    table {
        padding: 15px;
        width: 100%;
    }

    .page-break {
        page-break-after: always;
    }

    .w-10 {
        width: 10%;
    }

    .w-20 {
        width: 20%;
    }

    .w-30 {
        width: 30%;
    }

    .w-40 {
        width: 40%;
    }

    .w-50 {
        width: 50%;
    }

    .w-60 {
        width: 60%;
    }

    .w-70 {
        width: 70%;
    }

    .w-80 {
        width: 80%;
    }

    .w-90 {
        width: 90%;
    }

    .w-100 {
        width: 100%;
    }

    .intro {
        padding: 0 20px;
    }

    .intro h1 {
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .section-header {
        border-bottom: solid 3px #666666;
        margin-bottom: 20px;
    }

    .section {
        margin-top: 20px;
    }

    .section th {
        text-align: left;
        padding: 10px;
    }

    .section td {
        padding: 10px;
    }

    .list li {
        margin-bottom: 10px;
    }
}
</style>
