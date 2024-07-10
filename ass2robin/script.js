function editField(field) {
    const newValue = prompt(Enter new value for ${field});
    if (newValue) {
        // Here, you would typically update the backend or a database.
        alert(${field} updated to ${newValue});
    }
}