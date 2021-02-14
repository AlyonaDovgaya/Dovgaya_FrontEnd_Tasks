var DragManager = new function() {

    var dragObject = {};

    var self = this;

    function onMouseDown(e) {
        if (e.which != 1) return;
        var elem = e.target.closest('.draggable');
        if (!elem) return;
        //Remember the portable object
        dragObject.elem = elem;

      //Remember the coordinates from which the transfer of the object began
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
      //Element is not clamped
      if (!dragObject.elem) return;

      //Element is pressed, but has not yet started to move
      if (!dragObject.avatar) {
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;
            //Mouse has not moved when pressed
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
              return;
            }
            //Starting transfer
            dragObject.avatar = createAvatar(e);
            //Сancellation of transfer, you cannot "grab" this part of the element
            if (!dragObject.avatar) {
              dragObject = {};
            return;
            }
            //Сreate auxiliary properties shiftX / shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e);
        }

        //Display moving object on every mouse movement
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        let i;
        if((e.pageX <= 240 && e.pageX >= 50) && e.pageY <= 460){
            i = 1;
            basket.classList.add('open');
        }
        else{
            i = 0;
            basket.classList.remove('open');;
        }
        console.log(i);
        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) {
            finishDrag(e);
        }

        //Transfer either did not start, or completed
        //In any case clear the "transfer state" of the dragObject
        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);
        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {

        //Remember the old properties to return to them when canceling the transfer
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        //Function to cancel the transfer
        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;

        //Initiate start transfer
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {
        //Hide the wrapped element
        dragObject.avatar.hidden = true;
        //Get the most nested element under the mouse cursor
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        //Show the wrapped element back
        dragObject.avatar.hidden = false;

        if (elem == null) {
            return null;
        }
        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function(dragObject, dropElem) {};
    this.onDragCancel = function(dragObject) {};

};

function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
