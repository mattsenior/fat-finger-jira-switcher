let controls = document.getElementById("ghx-controls");

let jgPicker = document.createElement("ol");
jgPicker.style.padding = "0";
jgPicker.style.margin = "20px 0 10px";

let assignees = document
  .getElementById("assigneeList")
  .querySelectorAll("li[id^=filter-element]");

assignees.forEach(assignee => {
  const img = assignee.querySelector("img");

  if (!img) return;

  // const newImgSrc = img && img.src.replace(/\?.+$/, "?s=200");
  const newImgSrc = img && img.src;

  const li = document.createElement("li");
  li.id = `${assignee.id}--for-fat-fingers`;
  li.classList.add("face-for-fat-fingers");
  li.style.display = "inline-block";
  li.style.marginRight = "15px";
  li.style.borderRadius = "100%";
  li.style.overflow = "hidden";
  li.style.opacity = "0.5";
  li.style.transition = "opacity 100ms ease-in-out";

  const a = document.createElement("a");
  a.style.display = "block";
  a.onclick = () => {
    let isAlreadyChecked = false;

    assignees.forEach(assignee2 => {
      const checkbox = assignee2.querySelector("input[type=checkbox]");

      if (assignee === assignee2) {
        isAlreadyChecked = checkbox.checked;
      }

      if (
        assignee === assignee2 ||
        (assignee !== assignee2 && checkbox.checked)
      ) {
        checkbox.click();
      }
    });

    document.querySelectorAll(".face-for-fat-fingers").forEach(assigneeLi => {
      assigneeLi.style.opacity =
        li === assigneeLi && !isAlreadyChecked ? "1" : "0.5";
    });
  };

  const newImg = document.createElement("img");
  newImg.src = newImgSrc;
  newImg.width = 100;
  newImg.height = 100;
  newImg.style.display = "block";

  li.appendChild(a);
  a.appendChild(newImg);

  jgPicker.appendChild(li);
});

controls.appendChild(jgPicker);
