const xmlData = `
     <months>
        <month name="February">
            <day date="2025-02-09">Sunday</day>
            <day date="2025-02-10">Monday</day>
            <day date="2025-02-11">Tuesday</day>
            <day date="2025-02-12">Wednesday</day>
            <day date="2025-02-13">Thursday</day>
            <day date="2025-02-14">Friday</day>
            <day date="2025-02-15">Saturday</day>
        </month>
    </months>
`;

$(document).ready(function () {
    $('#getDayButton').click(function () {
        const userDate = $('#datePicker').val();
        console.log(userDate);

        if (!userDate) {
            alert("Please select a date.");
            return;
        }

        const xmlDoc = $.parseXML(xmlData);
        const $xml = $(xmlDoc);
        let foundDay = null;

        $xml.find("day").each(function () {
            if ($(this).attr("date") === userDate) {
                foundDay = $(this).text();
                return false;  // Exit the loop when found
            }
        });

        if (foundDay) {
            $('#output').html(`<pre>${foundDay}</pre>`);
        } else {
            $('#output').text("No data found for this date.");
        }
    });
});