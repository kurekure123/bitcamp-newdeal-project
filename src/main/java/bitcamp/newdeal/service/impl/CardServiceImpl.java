package bitcamp.newdeal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Card;
import bitcamp.newdeal.repository.CardRepository;
import bitcamp.newdeal.service.CardService;

@Service
public class CardServiceImpl implements CardService{
    
    @Autowired
    CardRepository cardRepository;

    @Override
    public int add(Card card) {
        return cardRepository.insert(card);
    }

    
}
