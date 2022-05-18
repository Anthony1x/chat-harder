import {ComponentFixture, TestBed} from '@angular/core/testing'

import {ChatsOverviewComponent} from './chats-overview.component'

describe('ChatsOverviewComponent', () => {
  let component: ChatsOverviewComponent
  let fixture: ComponentFixture<ChatsOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatsOverviewComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
