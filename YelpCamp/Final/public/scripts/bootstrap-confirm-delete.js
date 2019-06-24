$(document).ready(() => {
    $('.delete').bootstrap_confirm_delete({
        debug: false,
        heading: 'My Custom Delete Heading',
        message: 'Are you sure you want to delete this item?',
        btn_ok_label: 'Yes',
        btn_cancel_label: 'Cancel',
        data_type: 'post',
        callback: (event) => {
            // grab original clicked delete button
            var button = event.data.originalObject;
            // execute delete operation
            button.closest('tr').remove();
        },
        delete_callback: () => {
            console.log('delete button clicked');
        },
        cancel_callback: () => {
            console.log('cancel button clicked');
        },
    });
});
