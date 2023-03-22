window.onload = () => {
    AsideService.getInstance().loadAside();
    AsideEvent.getInstance().addEventShowAsideButton();
    AsideEvent.getInstance().addEventMainChange();
    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
    InformationService.getInstance().loadInfo();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventModifyAboutMeClick();
    InformationEvent.getInstance().addEventSaveAboutMeClick();
    InformationEvent.getInstance().addEventModifyIntroduceClick();
    InformationEvent.getInstance().addEventSaveIntroduceClick();
    InformationEvent.getInstance().addEventShowHomeButton();
}