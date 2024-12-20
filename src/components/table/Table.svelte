<script>
    import "./Table.css";
    import menuIcon from ".././../../src/images/menuIcon.svg";
</script>

<table class="shadow-z">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Juan Pérez</td>
            <td>30</td>
            <td>
                <div class="icon">
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </td>
        </tr>
        <tr>
            <td>María López</td>
            <td>25</td>
            <td>
                <div class="icon">
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </td>
        </tr>
        <tr>
            <td>Carlos García</td>
            <td>35</td>
            <td>
                <div class="icon">
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </td>
        </tr>
    </tbody>
</table>
