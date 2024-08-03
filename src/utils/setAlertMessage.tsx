export default function setAlertMessage(data: {
  ref: React.RefObject<HTMLElement>;
  type: string;
  message: string;
}) {
  const alertMessageBox = data.ref.current as HTMLElement;

  alertMessageBox.innerHTML = `
      <div class="${
        data.type === "error"
          ? "alert-danger"
          : data.type === "warning"
          ? "alert-warning"
          : data.type === "info"
          ? "alert-info"
          : "alert-success"
      } alert d-flex align-items-center fade show" role="alert" style="justify-content: space-between;">
      ${data.message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"style="margin-left: 5px;"></button>
    </div>
    `;
}
